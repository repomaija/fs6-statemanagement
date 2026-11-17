import { create } from 'zustand'

const useFeedbackStore = create(set => ({
  stats: {
    good: 0,
    bad: 0,
    neutral: 0,
  },
  actions: {
    good: () => set(state => ({ 
      stats: {
        ...state.stats,
        good: state.stats.good + 1,
      }
    })),
    bad: () => set(state => ({ 
      stats: {
        ...state.stats,
        bad: state.stats.bad + 1,
      }
    })),
    neutral: () => set(state => ({ 
      stats: {
        ...state.stats,
        neutral: state.stats.neutral + 1,
      }
    })),
  }  
}))

export const useFeedbackStats = () => useFeedbackStore(state => state.stats)
export const useFeedbackControls = () => useFeedbackStore(state => state.actions)