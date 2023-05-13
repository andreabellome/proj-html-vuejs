import { reactive } from "vue";

export const store = reactive(
    {

        /* start: object with header info */
        headerObj: [
            { id: 'Home' },
            { id: 'Courses' },
            { id: 'Instructors' },
            { id: 'Events' },
            { id: 'Pages' },
            { id: 'Elements' }
        ],
        /* end: object with header info */

        /* start: object with footer info */
        footerObj: [
            {
                id: 'iAcademy',
                li: [
                    {
                        course: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
                        teacher: ''
                    }
                ],
            },
            {
                id: 'Popular Courses',
                li: [
                    {
                        course: 'Business English',
                        teacher: 'Preston Marshall'
                    },
                    {
                        course: 'Social Computing',
                        teacher: 'David Sanders'
                    },
                    {
                        course: 'Learn Spanish',
                        teacher: 'Jennie King'
                    }
                ]
            },
            {
                id: 'Support',
                li: [
                    {
                        course: 'User Dashboard',
                        teacher: ''
                    },
                    {
                        course: 'Contact Us',
                        teacher: ''
                    },
                    {
                        course: 'FAQ',
                        teacher: ''
                    },
                    {
                        course: 'Course Offer',
                        teacher: ''
                    },
                    {
                        course: 'Events',
                        teacher: ''
                    },
                ]
            },
            {
                id: 'Flexible Learning'
            }
        ]
        /* end: object with footer info */
    }
)