import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { burgerSchema, type BurgerFormValues } from "./schema/burger.schema";

export default function BurgerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BurgerFormValues>({
    resolver: zodResolver(burgerSchema),
  });

  const onSubmit = (data: BurgerFormValues) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto px-6 py-8 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-white text-xl">Add Burger</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* LEFT */}
          <div className="space-y-5">
            <div className="space-y-2">
              <Label className="text-zinc-300">Burger Place</Label>
              <Input
                placeholder="e.g. Joe’s Burger House"
                {...register("place")}
                className="py-6 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-brand-light"
              />
              {errors.place && (
                <p className="text-red-400 text-sm">{errors.place.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Burger Address</Label>
              <Input
                placeholder="Street, City, Country"
                {...register("address")}
                className="py-6 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-brand-light"
              />
              {errors.address && (
                <p className="text-red-400 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Burger Name</Label>
              <Input
                placeholder="e.g. BBQ Bacon Burger"
                {...register("burgerName")}
                className="py-6 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-brand-light"
              />
              {errors.burgerName && (
                <p className="text-red-400 text-sm">
                  {errors.burgerName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Title</Label>
              <Input
                placeholder="Short catchy title"
                {...register("title")}
                className="py-6 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-brand-light"
              />
              {errors.title && (
                <p className="text-red-400 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Description</Label>
              <Textarea
                placeholder="Describe the burger..."
                {...register("description")}
                className="min-h-[140px] py-2 bg-zinc-950 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-brand-light"
              />
              {errors.description && (
                <p className="text-red-400 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {/* MAP */}
            <div className="space-y-2 h-64">
              <Label className="text-zinc-300">Map</Label>
              <div className="h-56 w-full rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center text-sm text-zinc-500">
                Map placeholder (Google Maps / Leaflet)
              </div>
            </div>

            {/* UPLOAD */}
            <div className="space-y-2">
              <Label className="text-zinc-300">Upload Image</Label>

              <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-950 hover:border-brand-light transition cursor-pointer p-6 text-center">
                <Input
                  type="file"
                  accept="image/*"
                  {...register("image")}
                  className="hidden"
                  id="imageUpload"
                />

                <label
                  htmlFor="imageUpload"
                  className="text-zinc-400 hover:text-brand-light cursor-pointer text-sm"
                >
                  Drag & drop or click to upload image
                </label>
                {errors.image && (
                  <p className="text-red-400 text-sm">
                    {errors.image.message as string}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2 h-34 flex flex-1 justify-end items-end">
              <Button
                type="submit"
                className="w-full md:w-auto p-8 cursor-pointer bg-brand-light hover:bg-brand-light text-white font-semibold"
              >
                Add Burger
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
