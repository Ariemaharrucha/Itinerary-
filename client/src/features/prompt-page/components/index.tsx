import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";

type ItineraryItem = {
    Hari: string;
    Pagi: string;
    Siang: string;
    Sore: string;
    Malam: string;
  };
  
  type TravelPlanResponse = {
    InformasiUmum: string[];
    Catatan: string[];
    Itinerary: ItineraryItem[];
    EstimasiTotalBiaya: string[];
    SisaAnggaran: string[];
    TipsTambahan: string[];
  };
  

const formSchema = z.object({
  location: z
    .string()
    .min(3, { message: "lokasi must be at least 2 characters." }),
  type: z.string().nonempty({ message: "Tipe liburan wajib diisi." }),
  duration: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Durasi harus berupa angka.",
    })
    .transform((val) => Number(val)),
  budget: z.string().nonempty({ message: "Biaya harus berupa lengkap." }),
  preferences: z.string().nonempty({ message: "Preferensi wajib diisi." }),
});

type FormValues = z.infer<typeof formSchema>;

export function PromptPage() {
  const [data, setData] = useState<TravelPlanResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      type: "",
      duration: 1,
      budget: "",
      preferences: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(
        "http://localhost:8000/itinerary",
        values
      );
      // console.log("Success:", response.data);
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error generating tips:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-1/2 mx-auto my-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormDescription>
              ini akan membantu untuk membuat rencana perjalanan mu .
            </FormDescription>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: Yogyakarta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipe Liburan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: sendiri, keluarga, teman"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Durasi ini dalam hari</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Contoh: 1 hari"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Biaya</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: 100000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferensi</FormLabel>
                  <FormControl>
                    <Input placeholder="Contoh: alam, kuliner" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>

        {data ? (
          <div>
            <h2 className="text-lg font-semibold">Informasi Umum</h2>
            <ul>
              {data.InformasiUmum.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Silakan masukkan data perjalanan untuk memulai.</p>
        )}
      </div>
    </>
  );
}
