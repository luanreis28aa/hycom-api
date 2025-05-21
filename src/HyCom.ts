import {
    AuthorPostsResponse,
    ExploreResponse,
    ExploreSortParametr,
    LastPostsResponse,
    QrCodeResponse,
    SearchPostsResponse,
    SiteInformationResponse,
    SortParametr,
    TagsResponse,
    TopAuthorResponse
} from "./types";

/*
{
  "success": true,
  "data": [
    {
      "endpoint": "/api/top-authors/",
      "method": "GET",
      "parameters": [
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of authors to return (1-50)"
        }
      ],
      "description": "Returns top authors sorted by total views"
    },
    {
      "endpoint": "/api/author-posts/\u003Cdisplay_name\u003E/",
      "method": "GET",
      "parameters": [
        {
          "name": "display_name",
          "type": "string",
          "description": "Author display name and profile ID (format: name-code)"
        },
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of posts to return (1-50)"
        },
        {
          "name": "sort",
          "type": "string",
          "default": "newest",
          "description": "Sort order (newest, most_viewed)"
        }
      ],
      "description": "Returns published posts by a specific author"
    },
    {
      "endpoint": "/api/tags/",
      "method": "GET",
      "parameters": [
        {
          "name": "limit",
          "type": "integer",
          "default": 20,
          "description": "Number of tags to return (1-100)"
        }
      ],
      "description": "Returns tags with their post counts"
    },
    {
      "endpoint": "/api/explore/",
      "method": "GET",
      "parameters": [
        {
          "name": "search",
          "type": "string",
          "default": "",
          "description": "Search query for title, tags, or author"
        },
        {
          "name": "page",
          "type": "integer",
          "default": 1,
          "description": "Page number for pagination"
        },
        {
          "name": "limit",
          "type": "integer",
          "default": 12,
          "description": "Number of posts per page (1-50)"
        },
        {
          "name": "sort",
          "type": "string",
          "default": "recommended",
          "description": "Sort order (recommended, newest, most_viewed)"
        },
        {
          "name": "tag",
          "type": "string",
          "default": "",
          "description": "Filter by tag slug"
        }
      ],
      "description": "Returns a paginated list of published articles with filtering and sorting"
    },
    {
      "endpoint": "/api/site-info/",
      "method": "GET",
      "parameters": [],
      "description": "Returns site statistics including last post, total views, total posts, and total authors"
    },
    {
      "endpoint": "/api/last-posts/",
      "method": "GET",
      "parameters": [
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of posts to return (1-50)"
        }
      ],
      "description": "Returns the most recent published posts"
    },
    {
      "endpoint": "/api/search-posts/",
      "method": "GET",
      "parameters": [
        {
          "name": "q",
          "type": "string",
          "required": true,
          "description": "Search query for title, tags, or author"
        },
        {
          "name": "limit",
          "type": "integer",
          "default": 10,
          "description": "Number of posts per page (1-50)"
        },
        {
          "name": "page",
          "type": "integer",
          "default": 1,
          "description": "Page number for pagination"
        }
      ],
      "description": "Searches published posts by query"
    },
    {
      "endpoint": "/api/qr-code/",
      "method": "GET",
      "parameters": [
        {
          "name": "url",
          "type": "string",
          "required": true,
          "description": "URL to encode in QR code"
        }
      ],
      "description": "Generates a QR code for the provided URL"
    }
  ]
}
 */
const hycom = {
    url: "https://hycom.ir",
    topAuthor: "/api/top-authors",
    authorPosts: "/api/author-posts",
    tags: "/api/tags",
    explore: "/api/explore",
    siteInformation: "/api/site-info",
    lastPosts: "/api/last-posts",
    searchPosts: "/api/search-posts",
    qrCode: "/api/qr-code"
};

/**
 * Returns top authors sorted by total views.
 * 
 * @param limit Number of authors to return. (1-50)
 */
async function topAuthor(limit: number = 10) {
    try {
        const response = await fetch(hycom.url + hycom.topAuthor + `?limit=${limit}`);
        const data: TopAuthorResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Returns published posts by a specific author.
 * 
 * @param display_name Author display name and profile ID. (format: name-code)
 * @param limit Number of authors to return. (1-50)
 * @param sort Sort order. (newest, most_viewed)
 */
async function authorPosts(display_name: string, limit: number = 10, sort: SortParametr = "newest") {
    try {
        const response = await fetch(hycom.url + hycom.authorPosts + `/${display_name}?limit=${limit}&sort=${sort}`);
        const data: AuthorPostsResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Returns tags with their post counts.
 * 
 * @param limit Number of tags to return. (1-100)
 */
async function getTags(limit: number = 20) {
    try {
        const response = await fetch(hycom.url + hycom.tags + `?limit=${limit}`);
        const data: TagsResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Returns a paginated list of published articles with filtering and sorting.
 * 
 * @param page Page number for pagination.
 * @param limit Number of posts per page. (1-50)
 * @param search Search query for title, tags, or author.
 * @param sort Sort order. (recommended, newest, most_viewed)
 * @param tag Filter by tag slug.
 */
async function explore(search: string = "", page: number = 1, limit: number = 12, sort: ExploreSortParametr = "newest", tag: string = "") {
    try {
        const response = await fetch(hycom.url + hycom.explore + `?search=${search}&page=${page}&limit=${limit}&sort=${sort}&tag=${tag}`);
        const data: ExploreResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Returns site statistics including last post, total views, total posts, and total authors.
 */
async function siteInformation() {
    try {
        const response = await fetch(hycom.url + hycom.siteInformation);
        const data: SiteInformationResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Returns the most recent published posts.
 * 
 * @param limit Number of posts to return. (1-50)
 */
async function lastPosts(limit: number = 10) {
    try {
        const response = await fetch(hycom.url + hycom.lastPosts + `?limit=${limit}`);
        const data: LastPostsResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Searches published posts by query.
 * 
 * @param query Search query for title, tags, or author.
 * @param limit Number of posts per page. (1-50)
 * @param page Page number for pagination.
 */
async function searchPosts(query: string, limit: number = 10, page: number = 1) {
    try {
        const response = await fetch(hycom.url + hycom.searchPosts + `?q=${query}&limit=${limit}&page=${page}`);
        const data: SearchPostsResponse = await response.json();

        return data.data;
    } catch {
        return null;
    }
}

/**
 * Generates a QR code for the provided URL.
 * 
 * @param url URL to encode in QR code.
 */
async function qrCode(url: string) {
    try {
        const response = await fetch(hycom.url + hycom.qrCode + `?url=${url}`);
        const data: QrCodeResponse = await response.json();

        return Buffer.from(
            data.data.qr_code
                .replace(/^data:image\/png;base64,/, ''),
            "base64"
        );
    } catch {
        return null;
    }
}

export {
    topAuthor,
    authorPosts,
    getTags,
    explore,
    siteInformation,
    lastPosts,
    searchPosts,
    qrCode
}
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */