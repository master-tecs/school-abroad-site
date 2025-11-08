"use client";

import { MessageCircle, Lock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CommunitySectionProps {
  hasSubscription: boolean;
}

export default function CommunitySection({
  hasSubscription,
}: CommunitySectionProps) {
  const topPosts = [
    {
      id: "1",
      title: "How I got my Canadian study permit approved in 3 weeks",
      author: "Sarah K.",
      replies: 24,
      views: 156,
    },
    {
      id: "2",
      title: "IELTS 8.5 - My Complete Study Guide",
      author: "Michael T.",
      replies: 18,
      views: 203,
    },
    {
      id: "3",
      title: "France Student Visa Process - Step by Step",
      author: "Amina L.",
      replies: 12,
      views: 98,
    },
  ];

  if (!hasSubscription) {
    return (
      <div className="community-section community-section--locked">
        <div className="community-section__header">
          <h2 className="community-section__title">Community Hub</h2>
          <Lock className="community-section__lock-icon" />
        </div>

        <div className="community-section__content">
          <p className="community-section__locked-text">
            Connect with students and mentors worldwide in our exclusive
            community.
          </p>
          <p className="community-section__locked-subtext">
            🔒 Available in Platinum Plan and above.
          </p>

          <Button
            size="lg"
            className="community-section__button community-section__button--upgrade"
            asChild
          >
            <Link href="/pricing">Unlock Community Access</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="community-section">
      <div className="community-section__header">
        <MessageCircle className="community-section__icon" />
        <h2 className="community-section__title">Community Hub</h2>
      </div>

      <div className="community-section__content">
        <div className="community-section__stats">
          <div className="community-section__stat">
            <Users className="community-section__stat-icon" />
            <div>
              <p className="community-section__stat-value">2,450+</p>
              <p className="community-section__stat-label">Active Members</p>
            </div>
          </div>
          <div className="community-section__stat">
            <TrendingUp className="community-section__stat-icon" />
            <div>
              <p className="community-section__stat-value">156</p>
              <p className="community-section__stat-label">Discussions Today</p>
            </div>
          </div>
        </div>

        <div className="community-section__posts">
          <h3 className="community-section__posts-title">Top Discussions</h3>
          {topPosts.map((post) => (
            <div key={post.id} className="community-section__post">
              <h4 className="community-section__post-title">{post.title}</h4>
              <div className="community-section__post-meta">
                <span className="community-section__post-author">
                  by {post.author}
                </span>
                <span className="community-section__post-stats">
                  {post.replies} replies • {post.views} views
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="community-section__button"
          asChild
        >
          <Link href="/dashboard/community">
            <MessageCircle />
            Join the Conversation
          </Link>
        </Button>
      </div>
    </div>
  );
}

