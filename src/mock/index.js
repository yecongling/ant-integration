import user from "./user";
import Mock from 'mockjs';
import permission from "./permission";
const mocks = [
    ...user,...permission
]

for (const mock of mocks) {
    Mock.mock(mock.url, mock.type, mock.response)
}