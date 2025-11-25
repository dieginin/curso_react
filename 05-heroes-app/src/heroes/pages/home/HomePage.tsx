import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { use, useMemo } from "react"

import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { FavoritesContext } from "@/context/Favorites.context"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { HeroStats } from "@/heroes/components/HeroStats"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { useSearchParams } from "react-router"
import { useSummary } from "@/heroes/hooks/useSummary"

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { favorites, favoritesCount } = use(FavoritesContext)

  const tab = searchParams.get("tab") ?? "all"
  const page = searchParams.get("page") ?? "1"
  const limit = searchParams.get("limit") ?? "6"
  const category = searchParams.get("category") ?? "all"

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"]
    return validTabs.includes(tab) ? tab : "all"
  }, [tab])

  const { data: heroesData } = usePaginatedHero(+page, +limit, category)
  const { data: summary } = useSummary()

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
                prev.set("category", "all")
                prev.set("page", "1")
                return prev
              })
            }
          >
            Todos ({summary?.totalHeroes})
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
            Favoritos ({favoritesCount})
          </TabsTrigger>
          <TabsTrigger
            value='heroes'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "heroes")
                prev.set("category", "hero")
                prev.set("page", "1")
                return prev
              })
            }
          >
            Heroes ({summary?.heroCount})
          </TabsTrigger>
          <TabsTrigger
            value='villains'
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "villains")
                prev.set("category", "villain")
                prev.set("page", "1")
                return prev
              })
            }
          >
            Villanos ({summary?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value='all'>
          {/* Display all characters */}
          <HeroGrid heroes={heroesData?.heroes ?? []} />
        </TabsContent>

        <TabsContent value='favorites'>
          {/* Display favorite characters */}
          <HeroGrid heroes={favorites} />
        </TabsContent>

        <TabsContent value='heroes'>
          {/* Display all heroes */}
          <HeroGrid heroes={heroesData?.heroes ?? []} />
        </TabsContent>

        <TabsContent value='villains'>
          {/* Display all villains */}
          <HeroGrid heroes={heroesData?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {selectedTab !== "favorites" && (
        <CustomPagination totalPages={heroesData?.pages ?? 1} />
      )}
    </>
  )
}
