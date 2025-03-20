import { fetchWithResponse } from "./data-utilities"

interface RetrieveWikiProps {
    wikiId: string
}

export const retrieveWiki = ({wikiId}: RetrieveWikiProps) => {
    return fetchWithResponse({resource:`wikis/${wikiId}/`,options:{}})
}

interface ListWikiProps {
    topicId: string
}

export const listWikis = ({topicId}: ListWikiProps) => {
    return fetchWithResponse({resource:`wikis/?topic=${topicId}`,options:{}})
}