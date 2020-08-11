const dummy = (blogs) => {
    return 1
}

const countLikes = (blogs) => {
    if (blogs === null) {
        return -1
    }
    else if (blogs.length == 0) {
        return 0
    } else {
        return blogs.reduce((acc, blog) => acc + blog.likes, 0)
    }
}

const favouriteBlog = (blogs) => {
    if (blogs === null) {
        return -1
    } else if (blogs.length === 0) {
        return {}
    } else {
        return blogs.reduce((highest, curr) =>
                            curr.likes > highest.likes ? curr : highest,
                            {"likes": -1} )
    }
}

const mostBlogs = (blogs) => {
    if (blogs === null) {
        return -1
    } else if (blogs.length === 0) {
        return {}
    } else {
        let counts = blogs.reduce((acc,curr) => {
            if (typeof acc[curr.author] === 'undefined') {
                acc[curr.author] = 1
            } else {
                acc[curr.author] += 1
            }
            return acc
        }, {})
        let highestAuthorship = Object.entries(counts).reduce((highest, current) => {
            return highest[1] > current[1] ? highest : current
        }, ["temp", -1])
        return {author: highestAuthorship[0], blogs: highestAuthorship[1]}
    }
}

const mostLikes = (blogs) => {
     if (blogs === null) {
        return -1
    } else if (blogs.length === 0) {
        return {}
    } else {
        let counts = blogs.reduce((acc,curr) => {
            if (typeof acc[curr.author] === 'undefined') {
                acc[curr.author] = curr.likes
            } else {
                acc[curr.author] += curr.likes
            }
            return acc
        }, {})
        let highestAuthorship = Object.entries(counts).reduce((highest, current) => {
            return highest[1] > current[1] ? highest : current
        }, ["temp", -1])
        return {author: highestAuthorship[0], likes: highestAuthorship[1]}
    }
}

module.exports = {
    dummy,
    countLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}
