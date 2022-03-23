export type IResponse = {
    track: string,
    title: string,
    startTime: string,
    endDate: string,
    events: {
        title: string,
        startTime: string,
        endTime: string,
        certificate: boolean
    }[],
    campus: string,
    speakers: string[],
    enrollmentsStart: string,
    detailsURL: string
}