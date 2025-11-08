"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import "./auth.scss";

function SignUpContent() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side - Image/Visual */}
        <div className="auth-visual">
          <div className="auth-visual__overlay"></div>
          <Image
            src="/assets/images/students/student-1.png"
            alt="Students studying abroad"
            width={800}
            height={1000}
            className="auth-visual__image"
            priority
          />
          <div className="auth-visual__content">
            <div className="auth-visual__logo">
              <Image
                src="/assets/images/logo.png"
                alt="School Abroad Logo"
                width={200}
                height={60}
                priority
              />
            </div>
            <h2 className="auth-visual__title">Start Your Journey</h2>
            <p className="auth-visual__description">
              Join thousands of students achieving their dreams of studying
              abroad with School Abroad
            </p>
            <div className="auth-visual__features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Free consultation</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Expert guidance</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Personalized support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-form-header">
              <h1 className="auth-form-title">Create Account</h1>
              <p className="auth-form-subtitle">
                Sign up to start your study abroad journey
              </p>
            </div>

            <div className="auth-form-content">
              <Button
                variant="outline"
                className={cn("auth-google-button", loading && "loading")}
                disabled={loading}
                onClick={async () => {
                  try {
                    await authClient.signIn.social(
                      {
                        provider: "google",
                        callbackURL: returnTo || "/dashboard",
                      },
                      {
                        onRequest: () => {
                          setLoading(true);
                        },
                        onResponse: () => {
                          setLoading(false);
                        },
                        onError: (error) => {
                          setLoading(false);
                          console.error("Sign-up error:", error);
                          toast.error("Sign-up failed. Please try again.", {
                            duration: 5000,
                          });
                        },
                      },
                    );
                  } catch (error) {
                    setLoading(false);
                    console.error("Sign-up failed:", error);
                    toast.error("Oops, something went wrong", {
                      duration: 5000,
                    });
                  }
                }}
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 262"
                    >
                      <path
                        fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      ></path>
                    </svg>
                    Continue with Google
                  </>
                )}
              </Button>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <div className="auth-info-box">
                <p>
                  Already have an account?{" "}
                  <Link href="/sign-in" className="auth-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>

            <div className="auth-form-footer">
              <p className="auth-terms">
                By creating an account, you agree to our{" "}
                <Link
                  href="/terms-of-service"
                  className="auth-link-inline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="auth-link-inline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignUp() {
  return (
    <Suspense
      fallback={
        <div className="auth-page">
          <div className="auth-loading">
            <div className="auth-loading-spinner"></div>
          </div>
        </div>
      }
    >
      <SignUpContent />
    </Suspense>
  );
}