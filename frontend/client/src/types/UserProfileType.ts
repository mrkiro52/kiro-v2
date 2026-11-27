export type UserProfileType = {
    id: string
    name: string
    username: string
    specialization: string
    about: string
    bio: string
    links: { label: string; url: string }[]
    postIds: number[]
}