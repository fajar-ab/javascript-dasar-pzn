
const grade = 'A';

switch (grade) {
    case 'A':
        console.info('wow, anda lulus dengan baik')
        break
    case 'B':
    case 'C':
        console.info('anda lulus')
        break
    case 'D':
        console.info('anda tidak lulus')
        break
    default:
        console.info('mungkin anda salah jurusan')
}