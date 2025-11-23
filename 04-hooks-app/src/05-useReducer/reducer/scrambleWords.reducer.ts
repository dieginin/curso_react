export interface ScrambleWordsState {
  currentWord: string
  errorCounter: number
  guess: string
  isGameOver: boolean
  maxAllowErrors: number
  maxSkips: number
  points: number
  scrambledWord: string
  skipCounter: number
  words: string[]
  totalWords: number
}

export type ScrambleWordsAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "NEW_GAME"; payload: ScrambleWordsState }

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
]

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
}

export const getInitialState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS])
  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    totalWords: shuffledWords.length,
    words: shuffledWords,
  }
}

export function scrambleWordsReducer(
  state: ScrambleWordsState,
  action: ScrambleWordsAction
): ScrambleWordsState {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      }

    case "CHECK_ANSWER": {
      if (state.currentWord !== state.guess) {
        return {
          ...state,
          guess: "",
          errorCounter: state.errorCounter + 1,
          isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
        }
      }

      const newWords = state.words.slice(1)
      return {
        ...state,
        currentWord: newWords[0],
        guess: "",
        points: state.points + 1,
        scrambledWord: scrambleWord(newWords[0]),
        words: newWords,
      }
    }

    case "SKIP_WORD": {
      const newWords = state.words.slice(1)
      return {
        ...state,
        currentWord: newWords[0],
        guess: "",
        scrambledWord: scrambleWord(newWords[0]),
        skipCounter: state.skipCounter + 1,
        words: newWords,
      }
    }

    case "NEW_GAME":
      return action.payload

    default:
      return state
  }
}
