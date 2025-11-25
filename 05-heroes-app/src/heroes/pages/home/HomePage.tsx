import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.actions"
import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const tab = searchParams.get("tab") ?? "all"
  const page = searchParams.get("page") ?? "1"
  const limit = searchParams.get("limit") ?? "6"

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"]
    return validTabs.includes(tab) ? tab : "all"
  }, [tab])

  const { data: heroesData } = useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPage(+page, +limit),
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
      <Tabs value={selectedTab} className='mb-8'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger
            value='all'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "all")
                return prev
              })
            }
          >
            Todos ({heroesData?.heroes.length})
          </TabsTrigger>
          <TabsTrigger
            value='favorites'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "favorites")
                return prev
              })
            }
          >
            Favoritos (3)
          </TabsTrigger>
          <TabsTrigger
            value='heroes'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "heroes")
                return prev
              })
            }
          >
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value='villains'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "villains")
                return prev
              })
            }
          >
            Villanos (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value='all'>
          {/* Display all characters */}
          <HeroGrid heroes={heroesData?.heroes ?? []} />
        </TabsContent>

        <TabsContent value='favorites'>
          {/* Display favorite characters */}
          <HeroGrid heroes={[]} />
        </TabsContent>

        <TabsContent value='heroes'>
          {/* Display all heroes */}
          <HeroGrid heroes={[]} />
        </TabsContent>

        <TabsContent value='villains'>
          {/* Display all villains */}
          <HeroGrid heroes={[]} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={heroesData?.pages ?? 1} />
    </>
  )
}
