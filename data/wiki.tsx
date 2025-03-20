import { fetchWithResponse } from "./data-utilities"

interface RetrieveWikiProps {
    pk: string
}

export const retrieveWiki = ({pk}: RetrieveWikiProps) => {
    return fetchWithResponse({resource:`wikis/${pk}`,options:{}})
}

interface ListWikiProps {
    topicId: string
}

export const listWikis = ({topicId}: ListWikiProps) => {
    return fetchWithResponse({resource:`wikis/?topic=${topicId}`,options:{}})
}