
import { useState } from "react";
import { Check, CalendarIcon, Fish } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BookingForm() {
  const { t } = useLanguage();
  const [fishingDate, setFishingDate] = useState<Date>();
  const [weight, setWeight] = useState("50");
  const [fishSize, setFishSize] = useState("medium");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the booking data to a server
    console.log("Fishing booking submitted:", { fishingDate, weight, fishSize });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">Fish Booking</h3>
      
      <div className="space-y-4">
        {/* Fishing Date */}
        <div className="space-y-2">
          <label htmlFor="fishing-date" className="block text-sm font-medium">
            Fishing Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="fishing-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !fishingDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fishingDate ? format(fishingDate, "PPP") : <span>Select fishing date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={fishingDate}
                onSelect={setFishingDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Weight */}
          <div className="space-y-2">
            <label htmlFor="weight" className="block text-sm font-medium">
              Weight (kg)
            </label>
            <Select value={weight} onValueChange={setWeight}>
              <SelectTrigger id="weight" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {["10", "20", "30", "40", "50", "100", "150"].map((num) => (
                  <SelectItem key={num} value={num}>
                    {num} kg
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Fish Size */}
          <div className="space-y-2">
            <label htmlFor="fish-size" className="block text-sm font-medium">
              Fish Size
            </label>
            <Select value={fishSize} onValueChange={setFishSize}>
              <SelectTrigger id="fish-size" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {["small", "medium", "large", "extra large"].map((size) => (
                  <SelectItem key={size} value={size}>
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Booking Confirmed
          </>
        ) : (
          <>
            <Fish className="mr-2 h-4 w-4" />
            Check Availability
          </>
        )}
      </Button>
    </form>
  );
}
