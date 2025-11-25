import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from "@/components/ui/button"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { useState } from "react"

type DisplayMode = "all" | "favorites" | "heroes" | "villains"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<DisplayMode>("all")

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title='Universo de SuperHeroes'
        description='Descubre, explora y administra superheroes y villanos'
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeTab} className='mb-8'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='all' onClick={() => setActiveTab("all")}>
            Todos (16)
          </TabsTrigger>
          <TabsTrigger
            value='favorites'
            onClick={() => setActiveTab("favorites")}
          >
            Favoritos (3)
          </TabsTrigger>
          <TabsTrigger value='heroes' onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value='villains'
            onClick={() => setActiveTab("villains")}
          >
            Villanos (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value='all'>
          {/* Display all characters */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value='favorites'>
          {/* Display favorite characters */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value='heroes'>
          {/* Display all heroes */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value='villains'>
          {/* Display all villains */}
          <HeroGrid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className='flex items-center justify-center space-x-2'>
        <Button variant='outline' size='sm' disabled>
          <ChevronLeft className='h-4 w-4' />
          Previous
        </Button>

        <Button variant='default' size='sm'>
          1
        </Button>
        <Button variant='outline' size='sm'>
          2
        </Button>
        <Button variant='outline' size='sm'>
          3
        </Button>
        <Button variant='ghost' size='sm' disabled>
          <MoreHorizontal className='h-4 w-4' />
        </Button>

        <Button variant='outline' size='sm'>
          Next
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </>
  )
}
