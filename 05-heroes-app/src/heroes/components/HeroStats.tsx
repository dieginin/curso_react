import { Heart, Trophy, Users, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { FavoritesContext } from "@/context/Favorites.context"
import { HeroStatCard } from "./HeroStatCard"
import { use } from "react"
import { useSummary } from "../hooks/useSummary"

export const HeroStats = () => {
  const { data: summary } = useSummary()
  const { favoritesCount } = use(FavoritesContext)

  return (
    <div className='grid grid-cols-2 gap-4 mb-8 md:grid-cols-4'>
      <HeroStatCard
        title='Total de personajes'
        icon={<Users className='w-4 h-4 text-muted-foreground' />}
      >
        <div className='text-2xl font-bold'>{summary?.totalHeroes}</div>
        <div className='flex gap-1 mt-2'>
          <Badge variant='secondary' className='text-xs'>
            {summary?.heroCount} Heroes
          </Badge>
          <Badge variant='destructive' className='text-xs'>
            {summary?.villainCount} Villanos
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title='Favoritos'
        icon={<Heart className='w-4 h-4 text-muted-foreground' />}
      >
        <div className='text-2xl font-bold text-red-600'>{favoritesCount}</div>
        <p className='text-xs text-muted-foreground'>
          {(favoritesCount / (summary?.totalHeroes ?? 0)) * 100}% del total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title='Fuerte'
        icon={<Zap className='w-4 h-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>{summary?.strongestHero.alias}</div>
        <p className='text-xs text-muted-foreground'>
          Fuerza: {summary?.strongestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title='Inteligente'
        icon={<Trophy className='w-4 h-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>{summary?.smartestHero.alias}</div>
        <p className='text-xs text-muted-foreground'>
          Inteligencia: {summary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  )
}
