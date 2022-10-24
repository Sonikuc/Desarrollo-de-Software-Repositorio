"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDCoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const courses_entity_1 = require("./../entities/courses.entity");
let CRUDCoursesService = class CRUDCoursesService {
    constructor(coursesrepo) {
        this.coursesrepo = coursesrepo;
    }
    findAll() {
        return this.coursesrepo.find();
    }
    findOne(id_course) {
        return this.coursesrepo.findOne({ where: { id: id_course } });
    }
    createCourse(body) {
        const newCourse = this.coursesrepo.create(body);
        return (this.coursesrepo.save(newCourse));
    }
    async updateCourse(id_course, body) {
        const course = await this.coursesrepo.findOne({ where: { id: id_course } });
        this.coursesrepo.merge(course, body);
        return (this.coursesrepo.save(course));
    }
    async deleteCourse(id_course) {
        await this.coursesrepo.delete(id_course);
        return ('Curso ' + id_course + ' Eliminado');
    }
};
CRUDCoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(courses_entity_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CRUDCoursesService);
exports.CRUDCoursesService = CRUDCoursesService;
//# sourceMappingURL=courses.service.js.map