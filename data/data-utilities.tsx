export let API_URL = ''

if (process.env.NODE_ENV === 'development') {
    API_URL = 'http://127.0.0.1:8000'
} else if (process.env.NODE_ENV === 'production') {
    API_URL = ''
}

interface DataProps {
    resource: string,
    options: object
}

export const fetchWithResponse = ({resource, options}: DataProps) => 
    fetch(`${API_URL}/${resource}`, options)
    .then((res) => res.json())

export const fetchWithoutResponse = ({resource, options}: DataProps) => 
    fetch(`${API_URL}/${resource}`, options)