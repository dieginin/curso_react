import { Heart, Trophy, Users, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { HeroStatCard } from "./HeroStatCard"
import { getSummary } from "../actions/get-summary.actions"
import { useQuery } from "@tanstack/react-query"

export const HeroStats = () => {
  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 5, //5 minutos
  })

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
      <HeroStatCard
        title='Total de personajes'
        icon={<Users className='h-4 w-4 text-muted-foreground' />}
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
        icon={<Heart className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-2xl font-bold text-red-600'>3</div>
        <p className='text-xs text-muted-foreground'>18.8% del total</p>
      </HeroStatCard>

      <HeroStatCard
        title='Fuerte'
        icon={<Zap className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>{summary?.strongestHero.alias}</div>
        <p className='text-xs text-muted-foreground'>
          Fuerza: {summary?.smartestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title='Inteligente'
        icon={<Trophy className='h-4 w-4 text-muted-foreground' />}
      >
        <div className='text-lg font-bold'>{summary?.smartestHero.alias}</div>
        <p className='text-xs text-muted-foreground'>
          Inteligencia: {summary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  )
}
