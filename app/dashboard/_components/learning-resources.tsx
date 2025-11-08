"use client";

import { FileText, Video, Download, Lock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface LearningResourcesProps {
  hasSubscription: boolean;
}

type Category = "all" | "ielts" | "visa" | "career" | "country";

export default function LearningResources({
  hasSubscription,
}: LearningResourcesProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const resources = [
    {
      id: "1",
      type: "video",
      title: "IELTS Tips: Writing Task 2",
      category: "ielts",
      locked: false,
    },
    {
      id: "2",
      type: "video",
      title: "French for Beginners",
      category: "ielts",
      locked: false,
    },
    {
      id: "3",
      type: "template",
      title: "Visa Checklist Template",
      category: "visa",
      locked: !hasSubscription,
    },
    {
      id: "4",
      type: "template",
      title: "SOP Sample",
      category: "visa",
      locked: !hasSubscription,
    },
    {
      id: "5",
      type: "template",
      title: "Financial Proof Letter Sample",
      category: "visa",
      locked: !hasSubscription,
    },
    {
      id: "6",
      type: "video",
      title: "Visa Guide Tutorials",
      category: "visa",
      locked: !hasSubscription,
    },
  ];

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All" },
    { value: "ielts", label: "IELTS" },
    { value: "visa", label: "Visa" },
    { value: "career", label: "Career" },
    { value: "country", label: "Country-Specific" },
  ];

  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  return (
    <div className="learning-resources">
      <div className="learning-resources__header">
        <h2 className="learning-resources__title">Learning & Resources</h2>
        <div className="learning-resources__filters">
          <Filter className="learning-resources__filter-icon" />
          <div className="learning-resources__filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`learning-resources__filter-btn ${
                  selectedCategory === cat.value
                    ? "learning-resources__filter-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="learning-resources__grid">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className={`learning-resources__card ${
              resource.locked ? "learning-resources__card--locked" : ""
            }`}
          >
            {resource.locked && (
              <div className="learning-resources__lock-overlay">
                <Lock className="learning-resources__lock-icon" />
              </div>
            )}

            <div className="learning-resources__card-icon">
              {resource.type === "video" ? (
                <Video className="learning-resources__icon" />
              ) : (
                <FileText className="learning-resources__icon" />
              )}
            </div>

            <div className="learning-resources__card-content">
              <h3 className="learning-resources__card-title">
                {resource.title}
              </h3>
              <p className="learning-resources__card-type">
                {resource.type === "video" ? "Video Lesson" : "Template"}
              </p>
            </div>

            <div className="learning-resources__card-action">
              {resource.locked ? (
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="learning-resources__action-btn"
                >
                  <Link href="/pricing">
                    <Lock />
                    Unlock
                  </Link>
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="learning-resources__action-btn"
                  asChild
                >
                  <Link href={resource.type === "video" ? "#" : "#"}>
                    {resource.type === "video" ? (
                      <>
                        <Video />
                        Watch
                      </>
                    ) : (
                      <>
                        <Download />
                        Download
                      </>
                    )}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!hasSubscription && (
        <div className="learning-resources__upgrade">
          <p className="learning-resources__upgrade-text">
            Want full access? Subscribe now to join exclusive mentorship calls,
            unlock visa templates, and get real-time study-abroad updates.
          </p>
          <Button size="lg" asChild className="learning-resources__upgrade-btn">
            <Link href="/pricing">Upgrade & Unlock My Journey</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

