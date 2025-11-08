"use client";

import { useState } from "react";
import { MessageCircle, Search, Send, Heart, Share2, User, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import "./community.scss";

interface Post {
  id: string;
  author: string;
  authorAvatar?: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  time: string;
  isLiked?: boolean;
}

const posts: Post[] = [
  {
    id: "1",
    author: "Sarah M.",
    title: "Tips for Visa Interview Success",
    content: "Just had my visa interview and got approved! Here are my top tips that helped me...",
    category: "Visa",
    likes: 42,
    replies: 8,
    time: "2 hours ago",
  },
  {
    id: "2",
    author: "John D.",
    title: "Best Universities for Computer Science in Canada",
    content: "I'm researching universities for CS masters. Any recommendations for top programs?",
    category: "University",
    likes: 28,
    replies: 15,
    time: "5 hours ago",
  },
  {
    id: "3",
    author: "Maria L.",
    title: "Scholarship Application Timeline",
    content: "Created a helpful timeline for applying to scholarships. Hope this helps!",
    category: "Scholarship",
    likes: 67,
    replies: 12,
    time: "1 day ago",
    isLiked: true,
  },
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="community-page">
      <div className="community-page__header">
        <div>
          <h1 className="community-page__title">Community Hub</h1>
          <p className="community-page__subtitle">
            Connect with students, share experiences, and get advice from mentors
          </p>
        </div>
      </div>

      <div className="community-page__create-post">
        <Card className="community-page__create-card">
          <CardContent className="community-page__create-content">
            <h3 className="community-page__create-title">Start a Discussion</h3>
            <Input
              placeholder="Post title..."
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="community-page__create-input"
            />
            <Textarea
              placeholder="What's on your mind?"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              rows={3}
              className="community-page__create-textarea"
            />
            <Button className="community-page__create-button">
              <Send className="community-page__create-icon" />
              Post
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="community-page__filters">
        <div className="community-page__search">
          <Search className="community-page__search-icon" />
          <Input
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="community-page__search-input"
          />
        </div>
        <div className="community-page__category-buttons">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "visa" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("visa")}
          >
            Visa
          </Button>
          <Button
            variant={selectedCategory === "university" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("university")}
          >
            University
          </Button>
          <Button
            variant={selectedCategory === "scholarship" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("scholarship")}
          >
            Scholarship
          </Button>
        </div>
      </div>

      <div className="community-page__posts">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="community-page__post">
            <CardContent className="community-page__post-content">
              <div className="community-page__post-header">
                <div className="community-page__post-author">
                  <Avatar className="community-page__post-avatar">
                    <AvatarImage src={post.authorAvatar} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="community-page__post-author-name">{post.author}</div>
                    <div className="community-page__post-time">
                      <Clock className="community-page__post-time-icon" />
                      {post.time}
                    </div>
                  </div>
                </div>
                <Badge className="community-page__post-category">{post.category}</Badge>
              </div>
              <h3 className="community-page__post-title">{post.title}</h3>
              <p className="community-page__post-text">{post.content}</p>
              <div className="community-page__post-actions">
                <Button
                  variant="ghost"
                  size="sm"
                  className={post.isLiked ? "community-page__post-action--liked" : ""}
                >
                  <Heart className="community-page__post-action-icon" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="community-page__post-action-icon" />
                  {post.replies} replies
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="community-page__post-action-icon" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

