// app/reminders/page.tsx or components/RemindersPageSkeleton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Bell, Plus } from "lucide-react";

export default function RemindersPageSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8" />
              <Skeleton className="h-10 w-64" />
            </div>
            <Skeleton className="h-6 w-96" />
          </div>
          <Button disabled className="shrink-0">
            <Plus className="mr-2 h-4 w-4" />
            <Skeleton className="h-5 w-32" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-4 w-40 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs + Filters Card */}
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
            {/* Tabs */}
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-9 w-32" />
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </Card>

        {/* Reminders Grid – 2 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[...Array(12)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="p-6 space-y-4">
                {/* Checkbox + Title + Date */}
                <div className="flex items-start gap-4">
                  <Skeleton className="h-5 w-5 rounded mt-1" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-7 w-3/4" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>

                {/* Description */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />

                {/* Tags / Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-20" />
                    <Skeleton className="h-9 w-9 rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-28" /> {/* Previous */}
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-9 w-9" />
            ))}
            <Skeleton className="h-9 w-28" /> {/* Next */}
          </div>
        </div>

        {/* Pagination Info */}
        <div className="text-center">
          <Skeleton className="h-4 w-80 mx-auto" />
        </div>
      </div>
    </div>
  );
}
