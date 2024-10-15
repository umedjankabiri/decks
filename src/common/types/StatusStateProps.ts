export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type StatusStateProps = {
  status: RequestStatusType
  error: string | null
}
