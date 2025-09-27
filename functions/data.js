 // Children data storage
        const childrenData = [
            {
                name: "Maria",
                age: "8 years old",
                country: "Philippines",
                image: "https://images.unsplash.com/photo-1549056572-75914d6d7e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 2",
                siblings: "3",
                interests: "Art",
                description: "Maria dreams of becoming a teacher. She lives with her grandmother and three siblings."
            },
            {
                name: "David",
                age: "10 years old",
                country: "Kenya",
                image: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                grade: "Grade 4",
                siblings: "2",
                interests: "Soccer",
                description: "David wants to be a doctor. He helps care for his younger siblings after school."
            },
            {
                name: "Lina",
                age: "7 years old",
                country: "Guatemala",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                grade: "Grade 1",
                siblings: "1",
                interests: "Dancing",
                description: "Lina loves to dance and sing. She lives with her mother who works as a cleaner."
            },
            {
                name: "Samuel",
                age: "9 years old",
                country: "Nigeria",
                image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 3",
                siblings: "4",
                interests: "Math",
                description: "Samuel excels in mathematics and wants to become an engineer. He's the eldest of four siblings."
            },
            {
                name: "Sophia",
                age: "11 years old",
                country: "India",
                image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 5",
                siblings: "2",
                interests: "Science",
                description: "Sophia is fascinated by science experiments and wants to become a research scientist."
            },
            {
                name: "Juan",
                age: "6 years old",
                country: "Mexico",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 1",
                siblings: "3",
                interests: "Drawing",
                description: "Juan loves to draw and create colorful pictures. He dreams of becoming an artist."
            },
            {
                name: "Amina",
                age: "12 years old",
                country: "Tanzania",
                image: "https://images.unsplash.com/photo-1526662092590-e314cbeaf8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 6",
                siblings: "5",
                interests: "Reading",
                description: "Amina is an avid reader who dreams of becoming a writer. She's the oldest of five children."
            },
            {
                name: "Lucas",
                age: "8 years old",
                country: "Brazil",
                image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 2",
                siblings: "2",
                interests: "Soccer",
                description: "Lucas loves playing soccer and dreams of becoming a professional footballer one day."
            },
            {
                name: "Mei",
                age: "10 years old",
                country: "China",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 4",
                siblings: "1",
                interests: "Music",
                description: "Mei is learning to play the violin and dreams of performing in an orchestra someday."
            },
            {
                name: "Diego",
                age: "7 years old",
                country: "Peru",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 1",
                siblings: "3",
                interests: "Animals",
                description: "Diego loves animals and wants to become a veterinarian when he grows up."
            },
            {
                name: "Zara",
                age: "9 years old",
                country: "Pakistan",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
                grade: "Grade 3",
                siblings: "4",
                interests: "Dancing",
                description: "Zara enjoys traditional dance and dreams of performing on stage one day."
            },
            {
                name: "Kofi",
                age: "11 years old",
                country: "Ghana",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                grade: "Grade 5",
                siblings: "3",
                interests: "Science",
                description: "Kofi is fascinated by the stars and wants to become an astronomer when he grows up."
            }
        ];