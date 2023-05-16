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

        /* start: carousel info */
        currActive: 1,

        carouselObj: [
            {
                title: 'Contemporary Ideas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem, temporibus earum minus delectus totam reiciendis voluptate sunt cum blanditiis porro sit.Quam ullam repudiandae, laudantium officiis maiores amet illum?',
            },
            {
                title: 'Title Second Slide',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem, temporibus earum minus delectus totam reiciendis voluptate sunt cum blanditiis porro sit.Quam ullam repudiandae, laudantium officiis maiores amet illum?',
            },
            {
                title: 'Title Third Slide',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem, temporibus earum minus delectus totam reiciendis voluptate sunt cum blanditiis porro sit.Quam ullam repudiandae, laudantium officiis maiores amet illum?',
            }
        ],
        /* end: carousel info */

        /* start: object with footer info */
        footerObj: [
            {
                id: 'iAcademy',
                li: [
                    {
                        course: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
                        teacher: '',
                        pathimg: ''
                    }
                ],
                tel: '1-677-124-442277',
                hours: 'Mon. - Sat. 8.00 - 18.00',
            },
            {
                id: 'Popular Courses',
                li: [
                    {
                        course: 'Business English',
                        teacher: 'Preston Marshall',
                        pathimg: ''
                    },
                    {
                        course: 'Social Computing',
                        teacher: 'David Sanders',
                        pathimg: ''
                    },
                    {
                        course: 'Learn Spanish',
                        teacher: 'Jennie King',
                        pathimg: ''
                    }
                ],
                tel: '',
                hours: '',
            },
            {
                id: 'Support',
                li: [
                    {
                        course: 'User Dashboard',
                        teacher: '',
                        pathimg: ''
                    },
                    {
                        course: 'Contact Us',
                        teacher: '',
                        pathimg: ''
                    },
                    {
                        course: 'FAQ',
                        teacher: '',
                        pathimg: ''
                    },
                    {
                        course: 'Course Offer',
                        teacher: '',
                        pathimg: ''
                    },
                    {
                        course: 'Events',
                        teacher: '',
                        pathimg: ''
                    },
                ],
                tel: '',
                hours: '',
            },
            {
                id: 'Flexible Learning',
                li: [
                    {
                        course: '',
                        teacher: '',
                        pathimg: '../assets/footer-img-1.png'
                    },
                ],
                tel: '',
                hours: '',
            }
        ]
        /* end: object with footer info */
    }
)