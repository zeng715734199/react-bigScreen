import Mock from 'mockjs'

const toFixed2 = "@float(0, 0, 2,  2)"
const randomNum = "@integer(1,999)"

export const mockNumList = (): Promise<{ list: number[] }> => Promise.resolve(Mock.mock({
    "list|9": [randomNum]
}))

export const mockFloatList = (): Promise<{ list: number[] }> => Promise.resolve(Mock.mock({
    "list|15": [toFixed2]
}))

export const mockNumListObj = (): Promise<{ data: Record<string, number[]> }> => Promise.resolve(Mock.mock({
    data: {
        "2011|9": [randomNum],
        "2012|9": [randomNum],
    }
}))

export const mockLineObj = (): Promise<{ data: Record<string, number[]> }> => Promise.resolve(Mock.mock({
    data: {
        "rob|9": [toFixed2],
        "dui|9": [toFixed2],
        "steal|9": [toFixed2],
        "kill|9": [toFixed2],
        "wound|9": [toFixed2],
    }
}))


