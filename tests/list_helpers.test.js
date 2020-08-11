const listHelpers = require('../utils/list_helpers')

test('dummy returns 1', () => {
    const blogs = []

    const result = listHelpers.dummy(blogs)
    expect(result).toBe(1)
})

describe('likes', () => {
    const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 }, { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }]
    test('passing null returns error code -1', () => {
        expect(listHelpers.countLikes(null)).toBe(-1)
    })
    test('an empty list returns 0', () => {
        expect(listHelpers.countLikes([])).toBe(0)
    })
    test('a list of 1 blog returns that blogs like count', () => {
        expect(listHelpers.countLikes([{"likes": 4}])).toBe(4)
    })
    test('a list of more blogs returns the correct count', () => {
        //expect(listHelpers.countLikes([{"likes":10},{"likes":5},{"likes":15}])).toBe(30)
        expect(listHelpers.countLikes(blogs)).toBe(36)
    })
})

describe('favourites', () => {
    const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 }, { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }]
    const blog = { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }
    test('a list of blogs returns the blog witht the highest likes', () => {
        expect(listHelpers.favouriteBlog(blogs)).toEqual(blog)
    })
    test('a list of 1 blog returns that blog', () => {
        expect(listHelpers.favouriteBlog([blog])).toEqual(blog)
    })
    test('an empty list returns an empty object', () => {
        expect(listHelpers.favouriteBlog([])).toEqual({})
    })
    test('a null returns error code -1', () => {
        expect(listHelpers.favouriteBlog(null)).toBe(-1)
    })
})

describe('blogCount', () => {
    const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Most Author", url: "https://reactpatterns.com/", likes: 7, __v: 0 }, { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Most Author", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Most Author", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }]
    const most = { author: "Most Author", blogs: 3 }
    test('a list of blogs returns the author with the most, plus count', () => {
        expect(listHelpers.mostBlogs(blogs)).toEqual(most)
    })
    test('an empty list returns an empty object', () => {
        expect(listHelpers.mostBlogs([])).toEqual({})
    })
    test('a null returns error code -1', () => {
        expect(listHelpers.mostBlogs(null)).toBe(-1)
    })
})

describe('likeCount', () => {
    const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Most Author", url: "https://reactpatterns.com/", likes: 20, __v: 0 }, { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Most Author", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Most Author", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }]
    const most = { author: "Most Author", likes: 25 }
    test('a list of blogs returns the author with the most, plus count', () => {
        expect(listHelpers.mostLikes(blogs)).toEqual(most)
    })
    test('an empty list returns an empty object', () => {
        expect(listHelpers.mostLikes([])).toEqual({})
    })
    test('a null returns error code -1', () => {
        expect(listHelpers.mostLikes(null)).toBe(-1)
    })
})
