import { fetchWithResponse } from "./data-utilities"

interface ListArticlesProps {
    wikiId: string
}

export const listArticles = ({wikiId}: ListArticlesProps) => {
    return fetchWithResponse({resource:`articles/?wiki=${wikiId}`,options:{}})
}