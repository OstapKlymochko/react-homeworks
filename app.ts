interface ISpacex {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    }
    links: {
        article_link?: string;
        video_link: string;
    }
    rocket: {
        rocket_name: string;
        first_stage: {
            cores: [
                {
                    flight: number;
                    core: {
                        reuse_count: number;
                        status: string;
                    }
                }
            ]
        };
        second_stage: {
            payloads: [
                {
                    payload_type: string;
                    payload_mass_kg: number;
                    payload_mass_lbs: number;
                }
            ]
        }
    }
}

const flight: ISpacex = {
    launch_date_local: 'a',
    launch_site: {
        site_name_long: 'a'
    },
    links: {
        article_link: 'asdas',
        video_link: 'sads'
    },
    mission_name: 'asdas',
    rocket: {
        rocket_name: 'sada',
        first_stage: {
            cores: [{
                flight: 32,
                core: {
                    reuse_count: 3,
                    status: 'asd'
                }
            }]

        },
        second_stage: {
            payloads: [{
                payload_type: 'sdas',
                payload_mass_kg: 321,
                payload_mass_lbs: 23432
            }
            ]

        }
    }
}

// console.log(flight);
// 2) протипізувати функції:

interface IUser {
    name: string;
    age: number;
    gender: string
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));