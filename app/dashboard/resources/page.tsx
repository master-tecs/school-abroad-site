"use client";

import { useState } from "react";
import { FileText, Download, Search, Filter, FileCheck, BookOpen, ClipboardList, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./resources.scss";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: "template" | "guide" | "checklist";
  fileType: "pdf" | "docx" | "xlsx";
  fileSize: string;
  downloads: number;
  icon: React.ComponentType<{ className?: string }>;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Student Visa Application Form",
    description: "Complete template for student visa applications with step-by-step instructions",
    category: "template",
    fileType: "pdf",
    fileSize: "2.4 MB",
    downloads: 1250,
    icon: FileText,
  },
  {
    id: "2",
    title: "Visa Interview Preparation Guide",
    description: "Comprehensive guide covering common questions and best practices",
    category: "guide",
    fileType: "pdf",
    fileSize: "5.1 MB",
    downloads: 980,
    icon: BookOpen,
  },
  {
    id: "3",
    title: "Pre-Departure Checklist",
    description: "Complete checklist of everything you need before leaving for your studies",
    category: "checklist",
    fileType: "xlsx",
    fileSize: "0.8 MB",
    downloads: 2100,
    icon: ClipboardList,
  },
  {
    id: "4",
    title: "Financial Statement Template",
    description: "Professional format for bank statements and proof of funds",
    category: "template",
    fileType: "docx",
    fileSize: "1.2 MB",
    downloads: 875,
    icon: FileText,
  },
  {
    id: "5",
    title: "University Application Guide",
    description: "Step-by-step process for applying to international universities",
    category: "guide",
    fileType: "pdf",
    fileSize: "8.3 MB",
    downloads: 1540,
    icon: BookOpen,
  },
  {
    id: "6",
    title: "Document Verification Checklist",
    description: "Ensure all your documents are properly verified before submission",
    category: "checklist",
    fileType: "pdf",
    fileSize: "1.5 MB",
    downloads: 1100,
    icon: ClipboardList,
  },
  {
    id: "7",
    title: "Statement of Purpose Template",
    description: "Professional SOP template with examples and writing tips",
    category: "template",
    fileType: "docx",
    fileSize: "3.2 MB",
    downloads: 1920,
    icon: FileText,
  },
  {
    id: "8",
    title: "Scholarship Application Guide",
    description: "Complete guide to finding and applying for scholarships abroad",
    category: "guide",
    fileType: "pdf",
    fileSize: "6.7 MB",
    downloads: 1350,
    icon: BookOpen,
  },
  {
    id: "9",
    title: "Accommodation Search Checklist",
    description: "Everything to consider when looking for student accommodation",
    category: "checklist",
    fileType: "pdf",
    fileSize: "2.1 MB",
    downloads: 980,
    icon: ClipboardList,
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "template" | "guide" | "checklist">("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const templates = filteredResources.filter((r) => r.category === "template");
  const guides = filteredResources.filter((r) => r.category === "guide");
  const checklists = filteredResources.filter((r) => r.category === "checklist");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "template":
        return "from-blue-500 to-cyan-500";
      case "guide":
        return "from-purple-500 to-pink-500";
      case "checklist":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="resources-page">
      <div className="resources-page__header">
        <div>
          <h1 className="resources-page__title">Visa Resources & Templates</h1>
          <p className="resources-page__subtitle">
            Download professional templates, guides, and checklists for your study abroad journey
          </p>
        </div>
        <div className="resources-page__stats">
          <div className="resources-page__stat">
            <FileText className="resources-page__stat-icon" />
            <div>
              <span className="resources-page__stat-value">{resources.length}</span>
              <span className="resources-page__stat-label">Resources</span>
            </div>
          </div>
          <div className="resources-page__stat">
            <Download className="resources-page__stat-icon" />
            <div>
              <span className="resources-page__stat-value">
                {resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
              </span>
              <span className="resources-page__stat-label">Downloads</span>
            </div>
          </div>
        </div>
      </div>

      <div className="resources-page__filters">
        <div className="resources-page__search">
          <Search className="resources-page__search-icon" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="resources-page__search-input"
          />
        </div>
        <div className="resources-page__filter-buttons">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            <Filter className="resources-page__filter-icon" />
            All
          </Button>
          <Button
            variant={selectedCategory === "template" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("template")}
          >
            Templates
          </Button>
          <Button
            variant={selectedCategory === "guide" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("guide")}
          >
            Guides
          </Button>
          <Button
            variant={selectedCategory === "checklist" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("checklist")}
          >
            Checklists
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="resources-page__tabs">
        <TabsList className="resources-page__tabs-list">
          <TabsTrigger value="all">All Resources ({filteredResources.length})</TabsTrigger>
          <TabsTrigger value="templates">Templates ({templates.length})</TabsTrigger>
          <TabsTrigger value="guides">Guides ({guides.length})</TabsTrigger>
          <TabsTrigger value="checklists">Checklists ({checklists.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="resources-page__tabs-content">
          <div className="resources-page__grid">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="resources-page__card">
                  <CardHeader>
                    <div className="resources-page__card-header">
                      <div className={`resources-page__card-icon resources-page__card-icon--${getCategoryColor(resource.category)}`}>
                        <Icon className="resources-page__card-icon-svg" />
                      </div>
                      <div className="resources-page__card-header-text">
                        <div className="resources-page__card-header-top">
                          <CardTitle className="resources-page__card-title">{resource.title}</CardTitle>
                          <Badge className="resources-page__card-badge">
                            {resource.fileType.toUpperCase()}
                          </Badge>
                        </div>
                        <CardDescription className="resources-page__card-description">
                          {resource.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="resources-page__card-footer">
                      <div className="resources-page__card-info">
                        <span className="resources-page__card-size">{resource.fileSize}</span>
                        <span className="resources-page__card-divider">•</span>
                        <span className="resources-page__card-downloads">
                          {resource.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button className="resources-page__card-button">
                        <Download className="resources-page__card-button-icon" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="resources-page__tabs-content">
          <div className="resources-page__grid">
            {templates.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="resources-page__card">
                  <CardHeader>
                    <div className="resources-page__card-header">
                      <div className={`resources-page__card-icon resources-page__card-icon--${getCategoryColor(resource.category)}`}>
                        <Icon className="resources-page__card-icon-svg" />
                      </div>
                      <div className="resources-page__card-header-text">
                        <div className="resources-page__card-header-top">
                          <CardTitle className="resources-page__card-title">{resource.title}</CardTitle>
                          <Badge className="resources-page__card-badge">
                            {resource.fileType.toUpperCase()}
                          </Badge>
                        </div>
                        <CardDescription className="resources-page__card-description">
                          {resource.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="resources-page__card-footer">
                      <div className="resources-page__card-info">
                        <span className="resources-page__card-size">{resource.fileSize}</span>
                        <span className="resources-page__card-divider">•</span>
                        <span className="resources-page__card-downloads">
                          {resource.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button className="resources-page__card-button">
                        <Download className="resources-page__card-button-icon" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="resources-page__tabs-content">
          <div className="resources-page__grid">
            {guides.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="resources-page__card">
                  <CardHeader>
                    <div className="resources-page__card-header">
                      <div className={`resources-page__card-icon resources-page__card-icon--${getCategoryColor(resource.category)}`}>
                        <Icon className="resources-page__card-icon-svg" />
                      </div>
                      <div className="resources-page__card-header-text">
                        <div className="resources-page__card-header-top">
                          <CardTitle className="resources-page__card-title">{resource.title}</CardTitle>
                          <Badge className="resources-page__card-badge">
                            {resource.fileType.toUpperCase()}
                          </Badge>
                        </div>
                        <CardDescription className="resources-page__card-description">
                          {resource.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="resources-page__card-footer">
                      <div className="resources-page__card-info">
                        <span className="resources-page__card-size">{resource.fileSize}</span>
                        <span className="resources-page__card-divider">•</span>
                        <span className="resources-page__card-downloads">
                          {resource.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button className="resources-page__card-button">
                        <Download className="resources-page__card-button-icon" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="checklists" className="resources-page__tabs-content">
          <div className="resources-page__grid">
            {checklists.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="resources-page__card">
                  <CardHeader>
                    <div className="resources-page__card-header">
                      <div className={`resources-page__card-icon resources-page__card-icon--${getCategoryColor(resource.category)}`}>
                        <Icon className="resources-page__card-icon-svg" />
                      </div>
                      <div className="resources-page__card-header-text">
                        <div className="resources-page__card-header-top">
                          <CardTitle className="resources-page__card-title">{resource.title}</CardTitle>
                          <Badge className="resources-page__card-badge">
                            {resource.fileType.toUpperCase()}
                          </Badge>
                        </div>
                        <CardDescription className="resources-page__card-description">
                          {resource.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="resources-page__card-footer">
                      <div className="resources-page__card-info">
                        <span className="resources-page__card-size">{resource.fileSize}</span>
                        <span className="resources-page__card-divider">•</span>
                        <span className="resources-page__card-downloads">
                          {resource.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button className="resources-page__card-button">
                        <Download className="resources-page__card-button-icon" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

