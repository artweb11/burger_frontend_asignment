"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type BurgerFormValues = {
  place: string;
  address: string;
  burgerName: string;
  title: string;
  description: string;
  image: FileList;
};

export default function BurgerForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BurgerFormValues>();

  const onSubmit = (data: BurgerFormValues) => {
    console.log("Form data:", data);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Burger</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Burger Place */}
          <div className="space-y-2">
            <Label>Burger Place</Label>
            <Input
              placeholder="e.g. Joe’s Burger House"
              {...register("place")}
            />
          </div>

          {/* Burger Address */}
          <div className="space-y-2">
            <Label>Burger Address</Label>
            <Input
              placeholder="Street, City, Country"
              {...register("address")}
            />
          </div>

          {/* Map Placeholder */}
          <div className="space-y-2">
            <Label>Map</Label>
            <div className="h-48 w-full rounded-md border bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Map placeholder (Google Maps / Leaflet goes here)
            </div>
          </div>

          {/* Burger Name */}
          <div className="space-y-2">
            <Label>Burger Name</Label>
            <Input
              placeholder="e.g. BBQ Bacon Burger"
              {...register("burgerName")}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Upload Image</Label>
            <Input type="file" accept="image/*" {...register("image")} />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Short catchy title" {...register("title")} />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Describe the burger..."
              {...register("description")}
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full">
            Add Burger
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
