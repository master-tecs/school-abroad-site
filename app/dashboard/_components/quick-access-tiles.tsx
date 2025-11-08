"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import {
  Video,
  FileText,
  Phone,
  MessageCircle,
  Compass,
  Mail,
} from "lucide-react";

interface Tile {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  locked: boolean;
  gradient: string;
}

interface QuickAccessTilesProps {
  hasSubscription: boolean;
}

export default function QuickAccessTiles({
  hasSubscription,
}: QuickAccessTilesProps) {
  const tiles: Tile[] = [
    {
      id: "1",
      title: "My Learning",
      description: "Access French & IELTS video lessons",
      icon: Video,
      href: "/dashboard/learning",
      locked: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "2",
      title: "Visa Resources",
      description: "Download templates, how-to guides, and checklists",
      icon: FileText,
      href: "/dashboard/resources",
      locked: !hasSubscription,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "3",
      title: "Mentorship Calls",
      description: "Book or review your mentorship call recordings",
      icon: Phone,
      href: "/dashboard/mentorship",
      locked: !hasSubscription,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "4",
      title: "Community Hub",
      description: "Connect with students and mentors worldwide",
      icon: MessageCircle,
      href: "/dashboard/community",
      locked: !hasSubscription,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "5",
      title: "Career Counselling",
      description: "Get personalized academic guidance",
      icon: Compass,
      href: "/dashboard/counselling",
      locked: !hasSubscription,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "6",
      title: "Application Tracker",
      description: "Track your school applications and visa updates",
      icon: Mail,
      href: "/dashboard/tracker",
      locked: !hasSubscription,
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="quick-access">
      <h2 className="quick-access__title">Quick Access</h2>
      <div className="quick-access__grid">
        {tiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <Link
              key={tile.id}
              href={tile.locked ? "/pricing" : tile.href}
              className={`quick-access__tile ${tile.locked ? "quick-access__tile--locked" : ""}`}
            >
              <div className={`quick-access__tile-icon quick-access__tile-icon--${tile.gradient}`}>
                <Icon className="quick-access__tile-icon-svg" />
                {tile.locked && (
                  <div className="quick-access__tile-lock">
                    <Lock />
                  </div>
                )}
              </div>
              <div className="quick-access__tile-content">
                <h3 className="quick-access__tile-title">{tile.title}</h3>
                <p className="quick-access__tile-description">
                  {tile.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

