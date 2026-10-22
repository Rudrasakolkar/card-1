let movieArr = [
    {
        id: 603,
        title: "Crystal Lake (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/sIj9WcA1LkcjGbYjrbfV3pGegbF.jpg",
        release_date: "1999-03-30",
        vote_average: 8.2,
        overview: "A computer hacker discovers the truth about reality and joins a group fighting powerful machinesSingle mother Pam Voorhees has been unable to shake her grief after her young, sickly son Jason tragically drowned in the town lake almost a year before. When two strangers arrive at Pam's door digging into her past,  a disturbing chain of events is set into motion, leaving the townspeople of Crystal Lake wondering: just who is Pam Voorhees?."
    },

    {
        id: 424,
        title: "Harry Potter and the Philosopher's Stone (2001)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        release_date: "1993-12-15",
        vote_average: 9.57,
        overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame."
    },

    {
        id: 9806,
        title: "Masterplan (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/5xmXVd7nCK3tAo34XkO58SxUCip.jpg",
        release_date: "2004-10-27",
        vote_average: 7.7,
        overview: "When a legendary thief sets his sights on the Mona Lisa, he recruits two young strangers to help him before revealing they are long-lost siblings… and oh yes, by the way, he is their father. Thrown into a chaotic reunion they never asked for, this new family must learn to work together — and try not to kill each other — if they want any chance at pulling off the heist of the century."
    },

    {
        id: 1452,
        title: "Spider-Man: Brand New Day (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
        release_date: "2006-06-28",
        vote_average: 5.9,
        overview: "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see."
    },

    {
        id: 8966,
        title: "Insidious: Out of the Further (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/4tTrW9dXCByS5wt2pXVWb58zNjz.jpg",
        release_date: "2008-07-01",
        vote_average: 3.54,
        overview: "Gemma, a young mother raising her daughter in the house she grew up in, discovers she can travel into The Further, where she possesses an ability to bring what lives there back to the real world."
    },

    {
        id: 603,
        title: "Resident Dead (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/qKhMVWwFikSUzOpkhOl35GBLkGH.jpg",
        release_date: "1999-03-30",
        vote_average: 8.2,
        overview: "A man keeping his recently zombified daughter secure in hopes of a cure is tasked with delivering an unknown package through hordes of undead. If he succeeds, he will be given a cure for his daughter. If he fails, or opens the package, they will both be killed."
    },

    {
        id: 453395,
        title: "Angry Birds Toons (2013)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/8lN3RNXtCdFMMb6kbpdrmdsuRr2.jpg",
        release_date: "2022-05-04",
        vote_average: 7.3,
        overview: "Angry Birds Toons tells how life is not always easy on Piggy Island. Red and his angry feathered companions, Chuck, Matilda, Bomb, the Blues and Terence must come together to protect their eggs - and future - of the cunning plots of Bad Piggies. Having only guides for their intelligence and determination, they absolutely must thwart the pigs' advanced technology. Nevertheless, they have a huge advantage... the incredible stupidity of the Bad Piggies! Angry Birds Toons gives life to the characters and adventures of one of the most popular games in history and presents the amusing world, and cunning of the Angry Birds and their sworn enemies, the Bad Piggies."
    },

    {
        id: 616037,
        title: "Reporting Live (2026)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/7Ncfrt43mLLFB8yWcWON8imHr0Q.jpg",
        release_date: "2022-07-06",
        vote_average: 6.5,
        overview: "A young reporter and her reluctant cameraman chase a story, only to get entangled in an illegal sand-mining racket run by a ruthless syndicate."
    },

    {
        id: 634649,
        title: "A Christmas Murder Mystery (2025)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/rotc7GM3PMdvHs1a9yQVtvDb55W.jpg",
        release_date: "2021-12-17",
        vote_average: 8.0,
        overview: "Vera Vexley is the editor of the Metropolitan Ledger’s puzzle section, and a part-time consulting detective for the local sheriff’s office. This year, she has been invited to spend the holidays with family friends, the Sterlings, a wealthy family who appears to be hiding enough secrets to stuff a sleigh. Vera soon finds herself helming a murder investigation when someone is found dead on Christmas morning, putting her at odds with the quick-tempered and distraught family members. Can Vera find the culprit before the holidays turn even more deadly?"
    },

    {
        id: 343611,
        title: "Home Alone (1990)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
        release_date: "2016-10-19",
        vote_average: 5.9,
        overview: "Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation. When thieves try to break into his home, he puts up a fight like no other."
    },

    {
        id: 424345,
        title: "The Boss Baby (2017)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/9MsQJKe4cUAGxc7R2NGaFQLqOPc.jpg",
        release_date: "1993-12-15",
        vote_average: 8.57,
        overview: "A story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim."
    },

    {
        id: 867424,
        title: "Avengers: Endgame (2019)",
        poster_path: "https://www.themoviedb.org/t/p/w1280/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg",
        release_date: "1993-12-15",
        vote_average: 4.96,
        overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
    },

];