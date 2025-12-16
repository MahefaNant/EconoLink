// app/goals/page.tsx or components/GoalsPageSkeleton.tsx
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Target, CheckCircle, TrendingUp } from "lucide-react";

export default function BudgetsPageSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-9 w-20" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {i === 0 && (
                    <Target className="h-4 w-4 text-muted-foreground" />
                  )}
                  {i === 1 && (
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  )}
                  {i === 2 && <TrendingUp className="h-4 w-4 text-amber-500" />}
                  {i === 3 && <div className="h-4 w-4" />}
                  <Skeleton className="h-4 w-32" />
                </div>
                {i === 3 && (
                  <div className="mt-4 space-y-2">
                    <Skeleton className="h-2 w-full" />
                    <div className="flex justify-between">
                      <Skeleton className="h-3 w-8" />
                      <Skeleton className="h-3 w-10" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Controls: Search + Filters + Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1">
              <Skeleton className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded" />
              <Skeleton className="h-10 w-full pl-10" />
            </div>
            <Skeleton className="h-10 w-12" />
          </div>

          <div className="flex gap-3">
            <Skeleton className="h-10 w-48" /> {/* Status Filter Select */}
            <Skeleton className="h-10 w-40" /> {/* Sort Button */}
            <Skeleton className="h-10 w-44" /> {/* New Goal Button */}
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-3 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-3 w-full" />
                </div>

                {/* Amount */}
                <Skeleton className="h-7 w-32" />

                {/* Action Buttons */}
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-24" />
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-9 w-9" />
            ))}
            <Skeleton className="h-9 w-24" />
          </div>
        </div>

        {/* Pagination Info */}
        <div className="text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>
    </div>
  );
}
