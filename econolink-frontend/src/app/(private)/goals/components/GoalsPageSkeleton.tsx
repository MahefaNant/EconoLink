// app/goals/page.tsx or components/GoalsPageSkeleton.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Target, CheckCircle, TrendingUp } from "lucide-react";

export default function GoalsPageSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Stats Section – 4 modern cards with colored icon backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1: Total Goals */}
          <div className="p-6 rounded-xl shadow-sm border bg-card">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-9 w-16" />
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Card 2: Completed */}
          <div className="p-6 rounded-xl shadow-sm border bg-card">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-16" />
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          {/* Card 3: Total Collected */}
          <div className="p-6 rounded-xl shadow-sm border bg-card">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-9 w-40" />
              </div>
              <div className="p-3 bg-amber-50 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>

          {/* Card 4: Global Progress */}
          <div className="p-6 rounded-xl shadow-sm border bg-card">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-2 w-full" />
            </div>
          </div>
        </div>

        {/* Controls: Search + Filters + Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded bg-muted" />
              <Skeleton className="h-10 w-full pl-10" />
            </div>
            <Skeleton className="h-10 w-12" /> {/* Search button */}
          </div>

          {/* Filters and Actions */}
          <div className="flex gap-3">
            <Skeleton className="h-10 w-48" /> {/* Status Select */}
            <Skeleton className="h-10 w-40" /> {/* Sort Button */}
            <Skeleton className="h-10 w-52" />{" "}
            {/* New Goal Button (gradient) */}
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card shadow-sm overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {/* Title + Description */}
                <div className="space-y-3">
                  <Skeleton className="h-7 w-4/5" />
                  <Skeleton className="h-4 w-3/5" />
                </div>

                {/* Progress Section */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-28" />
                  </div>
                  <Skeleton className="h-3 w-full" /> {/* Progress bar */}
                  <Skeleton className="h-4 w-20 mx-auto" /> {/* Percentage */}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 pt-4 border-t">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-28" />
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </div>
            </div>
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
