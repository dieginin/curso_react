import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.actions"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type DisplayMode = "all" | "favorites" | "heroes" | "villains"

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<DisplayMode>("all")

  const { data } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title='Universo de SuperHeroes'
        description='Descubre, explora y administra superheroes y villanos'
      />

      {/* Breadcrumb */}
      <CustomBreadcrumb currentPage='Super Heroes' />

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
      <CustomPagination totalPages={8} />
    </>
  )
}
