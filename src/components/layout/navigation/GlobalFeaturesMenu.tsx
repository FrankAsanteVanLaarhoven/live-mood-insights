
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { Globe, CloudSun, Clock, Languages, ChevronDown, MapPin } from 'lucide-react';

const GlobalFeaturesMenu = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(`[data-section="${sectionId}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(`[data-section="${sectionId}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <NavigationMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 hover:text-white flex items-center gap-2 bg-transparent border-none"
          >
            <Globe className="w-4 h-4" />
            Global Features
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-white/95 backdrop-blur-md border border-white/20 shadow-lg z-50"
          align="end"
        >
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-blue-50"
            onClick={() => scrollToSection('weather-widget')}
          >
            <CloudSun className="w-4 h-4 text-orange-500" />
            Weather & Air Quality
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-blue-50"
            onClick={() => scrollToSection('world-clock-widget')}
          >
            <Clock className="w-4 h-4 text-indigo-500" />
            World Clock
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-blue-50"
            onClick={() => scrollToSection('language-widget')}
          >
            <Languages className="w-4 h-4 text-blue-500" />
            Localization
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 cursor-pointer hover:bg-purple-50"
            onClick={() => navigate('/advanced-weather-dashboard')}
          >
            <MapPin className="w-4 h-4 text-purple-500" />
            Advanced Weather Dashboard
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavigationMenuItem>
  );
};

export default GlobalFeaturesMenu;
