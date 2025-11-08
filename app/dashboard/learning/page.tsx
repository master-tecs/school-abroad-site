"use client";

import { useState } from "react";
import { Video, Play, Clock, BookOpen, Award, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./learning.scss";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: "french" | "ielts";
  level: "beginner" | "intermediate" | "advanced";
  watched: boolean;
  progress?: number;
}

const lessons: Lesson[] = [
  {
    id: "1",
    title: "French Basics: Greetings & Introductions",
    description: "Learn essential French greetings and how to introduce yourself",
    duration: "15 min",
    category: "french",
    level: "beginner",
    thumbnail: "/assets/images/french-basics.jpg",
    watched: false,
  },
  {
    id: "2",
    title: "IELTS Speaking: Part 1 Strategies",
    description: "Master the fundamentals of IELTS speaking part 1",
    duration: "20 min",
    category: "ielts",
    level: "beginner",
    thumbnail: "/assets/images/ielts-speaking.jpg",
    watched: true,
    progress: 100,
  },
  {
    id: "3",
    title: "French Grammar: Present Tense",
    description: "Comprehensive guide to French present tense conjugation",
    duration: "25 min",
    category: "french",
    level: "intermediate",
    thumbnail: "/assets/images/french-grammar.jpg",
    watched: false,
  },
  {
    id: "4",
    title: "IELTS Writing Task 2: Essay Structure",
    description: "Learn how to structure a high-scoring essay",
    duration: "30 min",
    category: "ielts",
    level: "intermediate",
    thumbnail: "/assets/images/ielts-writing.jpg",
    watched: false,
    progress: 45,
  },
  {
    id: "5",
    title: "Advanced French: Subjunctive Mood",
    description: "Master the complex subjunctive mood in French",
    duration: "35 min",
    category: "french",
    level: "advanced",
    thumbnail: "/assets/images/french-advanced.jpg",
    watched: false,
  },
  {
    id: "6",
    title: "IELTS Listening: Note-Taking Techniques",
    description: "Improve your listening skills with proven note-taking methods",
    duration: "22 min",
    category: "ielts",
    level: "intermediate",
    thumbnail: "/assets/images/ielts-listening.jpg",
    watched: true,
    progress: 100,
  },
];

export default function LearningPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "french" | "ielts">("all");
  const [selectedLevel, setSelectedLevel] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || lesson.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || lesson.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const frenchLessons = filteredLessons.filter((l) => l.category === "french");
  const ieltsLessons = filteredLessons.filter((l) => l.category === "ielts");

  return (
    <div className="learning-page">
      <div className="learning-page__header">
        <div>
          <h1 className="learning-page__title">My Learning</h1>
          <p className="learning-page__subtitle">
            Master French and IELTS with expert-led video lessons
          </p>
        </div>
        <div className="learning-page__stats">
          <div className="learning-page__stat">
            <BookOpen className="learning-page__stat-icon" />
            <div>
              <span className="learning-page__stat-value">12</span>
              <span className="learning-page__stat-label">Lessons</span>
            </div>
          </div>
          <div className="learning-page__stat">
            <Clock className="learning-page__stat-icon" />
            <div>
              <span className="learning-page__stat-value">8.5h</span>
              <span className="learning-page__stat-label">Total Time</span>
            </div>
          </div>
          <div className="learning-page__stat">
            <Award className="learning-page__stat-icon" />
            <div>
              <span className="learning-page__stat-value">65%</span>
              <span className="learning-page__stat-label">Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="learning-page__filters">
        <div className="learning-page__search">
          <Search className="learning-page__search-icon" />
          <Input
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="learning-page__search-input"
          />
        </div>
        <div className="learning-page__filter-buttons">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "french" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("french")}
          >
            French
          </Button>
          <Button
            variant={selectedCategory === "ielts" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("ielts")}
          >
            IELTS
          </Button>
        </div>
        <div className="learning-page__filter-buttons">
          <Button
            variant={selectedLevel === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLevel("all")}
          >
            All Levels
          </Button>
          <Button
            variant={selectedLevel === "beginner" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLevel("beginner")}
          >
            Beginner
          </Button>
          <Button
            variant={selectedLevel === "intermediate" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLevel("intermediate")}
          >
            Intermediate
          </Button>
          <Button
            variant={selectedLevel === "advanced" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLevel("advanced")}
          >
            Advanced
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="learning-page__tabs">
        <TabsList className="learning-page__tabs-list">
          <TabsTrigger value="all">All Lessons ({filteredLessons.length})</TabsTrigger>
          <TabsTrigger value="french">French ({frenchLessons.length})</TabsTrigger>
          <TabsTrigger value="ielts">IELTS ({ieltsLessons.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="learning-page__tabs-content">
          <div className="learning-page__grid">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className="learning-page__card">
                <div className="learning-page__card-thumbnail">
                  <div className="learning-page__card-image">
                    <Video className="learning-page__card-video-icon" />
                  </div>
                  {lesson.watched && (
                    <Badge className="learning-page__card-badge learning-page__card-badge--completed">
                      Completed
                    </Badge>
                  )}
                  {lesson.progress && lesson.progress > 0 && lesson.progress < 100 && (
                    <div className="learning-page__card-progress">
                      <div
                        className="learning-page__card-progress-bar"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  )}
                  <Button className="learning-page__card-play">
                    <Play className="learning-page__card-play-icon" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="learning-page__card-header">
                    <CardTitle className="learning-page__card-title">{lesson.title}</CardTitle>
                    <Badge
                      variant={lesson.level === "beginner" ? "default" : lesson.level === "intermediate" ? "secondary" : "destructive"}
                      className="learning-page__card-level"
                    >
                      {lesson.level}
                    </Badge>
                  </div>
                  <CardDescription className="learning-page__card-description">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="learning-page__card-footer">
                    <div className="learning-page__card-duration">
                      <Clock className="learning-page__card-duration-icon" />
                      <span>{lesson.duration}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="learning-page__card-download-icon" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="french" className="learning-page__tabs-content">
          <div className="learning-page__grid">
            {frenchLessons.map((lesson) => (
              <Card key={lesson.id} className="learning-page__card">
                <div className="learning-page__card-thumbnail">
                  <div className="learning-page__card-image">
                    <Video className="learning-page__card-video-icon" />
                  </div>
                  {lesson.watched && (
                    <Badge className="learning-page__card-badge learning-page__card-badge--completed">
                      Completed
                    </Badge>
                  )}
                  <Button className="learning-page__card-play">
                    <Play className="learning-page__card-play-icon" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="learning-page__card-header">
                    <CardTitle className="learning-page__card-title">{lesson.title}</CardTitle>
                    <Badge
                      variant={lesson.level === "beginner" ? "default" : lesson.level === "intermediate" ? "secondary" : "destructive"}
                      className="learning-page__card-level"
                    >
                      {lesson.level}
                    </Badge>
                  </div>
                  <CardDescription className="learning-page__card-description">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="learning-page__card-footer">
                    <div className="learning-page__card-duration">
                      <Clock className="learning-page__card-duration-icon" />
                      <span>{lesson.duration}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="learning-page__card-download-icon" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ielts" className="learning-page__tabs-content">
          <div className="learning-page__grid">
            {ieltsLessons.map((lesson) => (
              <Card key={lesson.id} className="learning-page__card">
                <div className="learning-page__card-thumbnail">
                  <div className="learning-page__card-image">
                    <Video className="learning-page__card-video-icon" />
                  </div>
                  {lesson.watched && (
                    <Badge className="learning-page__card-badge learning-page__card-badge--completed">
                      Completed
                    </Badge>
                  )}
                  {lesson.progress && lesson.progress > 0 && lesson.progress < 100 && (
                    <div className="learning-page__card-progress">
                      <div
                        className="learning-page__card-progress-bar"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  )}
                  <Button className="learning-page__card-play">
                    <Play className="learning-page__card-play-icon" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="learning-page__card-header">
                    <CardTitle className="learning-page__card-title">{lesson.title}</CardTitle>
                    <Badge
                      variant={lesson.level === "beginner" ? "default" : lesson.level === "intermediate" ? "secondary" : "destructive"}
                      className="learning-page__card-level"
                    >
                      {lesson.level}
                    </Badge>
                  </div>
                  <CardDescription className="learning-page__card-description">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="learning-page__card-footer">
                    <div className="learning-page__card-duration">
                      <Clock className="learning-page__card-duration-icon" />
                      <span>{lesson.duration}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="learning-page__card-download-icon" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

