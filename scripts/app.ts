type Teacher = {
    name: string;
    subject: string;
};

type GoodTeacher = Teacher & {
    isGood: boolean;
};

const teacher: GoodTeacher = {
    name: "Rashid",
    subject: "English",
    isGood: true,
};
