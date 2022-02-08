export interface ISpaceShip {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: ILinks;
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                {
                    flight: number,
                    core: ICore;
                }
            ]
        },
        second_stage: {
            payloads: [IPayloads]
        }
    }
}

interface ILinks {
    article_link: null;
    video_link: string;
}

interface ICore {
    reuse_count: number,
    status: string;
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}