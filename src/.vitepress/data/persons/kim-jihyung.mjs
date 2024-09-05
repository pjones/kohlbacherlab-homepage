import {TeamID} from "../../domains/team/constants";
import {definePerson} from "../../domains/person/define";

export default definePerson({
    avatar: '/images/persons/default.png',
    name: 'Jihyung Kim',
    title: 'PhD Student',
    team: TeamID.ABI,
    links: [],
});