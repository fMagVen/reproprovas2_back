INSERT INTO terms ("number") VALUES (1);
INSERT INTO terms ("number") VALUES (2);
INSERT INTO terms ("number") VALUES (3);
INSERT INTO terms ("number") VALUES (4);
INSERT INTO terms ("number") VALUES (5);
INSERT INTO terms ("number") VALUES (6);
INSERT INTO terms ("number") VALUES (7);
INSERT INTO terms ("number") VALUES (8);
INSERT INTO terms ("number") VALUES (9);
INSERT INTO terms ("number") VALUES (10);


INSERT INTO disciplines ("name", "termId") VALUES ('html', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('css', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('javascript', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('soft 1', 1);

INSERT INTO disciplines ("name", "termId") VALUES ('react', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('express', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('hub', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('soft 2', 2);

INSERT INTO disciplines ("name", "termId") VALUES ('components and props', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('architecture', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('networks', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('soft 3', 3);

INSERT INTO disciplines ("name", "termId") VALUES ('mui', 4);
INSERT INTO disciplines ("name", "termId") VALUES ('typescript', 4);
INSERT INTO disciplines ("name", "termId") VALUES ('memory management', 4);
INSERT INTO disciplines ("name", "termId") VALUES ('soft 4', 4);


INSERT INTO teachers ("name") VALUES ('Dina');
INSERT INTO teachers ("name") VALUES ('Edu');
INSERT INTO teachers ("name") VALUES ('Marcus');
INSERT INTO teachers ("name") VALUES ('Bruna');


INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (1, 1);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (2, 2);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (3, 3);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (4, 4);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (1, 5);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (2, 6);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (3, 7);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (4, 8);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (1, 9);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (2, 10);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (3, 11);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (4, 12);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (1, 13);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (2, 14);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (3, 15);
INSERT INTO "TeacherDiscipline" ("teacherId", "disciplineId") VALUES (4, 16);


INSERT INTO categories ("name") VALUES ('P1');
INSERT INTO categories ("name") VALUES ('P2');
INSERT INTO categories ("name") VALUES ('PE');
INSERT INTO categories ("name") VALUES ('T1');
INSERT INTO categories ("name") VALUES ('T2');

/*html, dina*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('tags', 'asd', 1, 1);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('style', 'asd', 2, 1);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('tags & styles', 'asd', 3, 1);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('v8 research', 'asd', 4, 1);

/*css, edu*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('class', 'asd', 1, 2);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('style', 'asd', 2, 2);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('transform', 'asd', 3, 2);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('dinamic', 'asd', 4, 2);

/*js, marcus*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('DOM', 'asd', 1, 3);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('logic', 'asd', 2, 3);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('operations', 'asd', 3, 3);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('dinamic change', 'asd', 4, 3);

/*soft 1, bruna*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('purpose', 'asd', 1, 4);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('learning how to learn', 'asd', 2, 4);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('humbleness', 'asd', 3, 4);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('planning', 'asd', 4, 4);

/*dina, react*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('usestate', 'asd', 1, 5);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('useeffect', 'asd', 1, 5);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('webpack', 'asd', 1, 5);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('render', 'asd', 1, 5);

/*edu, express*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('server', 'asd', 1, 6);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('listen', 'asd', 2, 6);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('heroku', 'asd', 3, 6);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('node', 'asd', 4, 6);

/*marcus, hub*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('algorithms', 'asd', 1, 7);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('data stryctures', 'asd', 2, 7);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('complexity', 'asd', 3, 7);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('notation', 'asd', 4, 7);

/*bruna, soft 2*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('habits', 'asd', 1, 8);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('emotions', 'asd', 2, 8);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('syndromes', 'asd', 3, 8);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('growth', 'asd', 4, 8);

/*dina, components and props*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 1, 9);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('using', 'asd', 2, 9);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('returning', 'asd', 3, 9);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('updating', 'asd', 4, 9);

/*edu, architecture*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('routers', 'asd', 1, 10);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('controllers', 'asd', 2, 10);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('services', 'asd', 3, 10);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('repositories', 'asd', 4, 10);

/*marcus, networks*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('ip', 'asd', 1, 11);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('routers', 'asd', 2, 11);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('internet', 'asd', 3, 11);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('isp', 'asd', 4, 11);

/*bruna, soft 3*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('resilience', 'asd', 1, 12);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('diary', 'asd', 2, 12);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('vulnerability', 'asd', 3, 12);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('MBTI', 'asd', 4, 12);

/*dina, mui*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 1, 13);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 2, 13);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 3, 13);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 4, 13);

/*edu, typescript*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('passing', 'asd', 1, 14);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('interface', 'asd', 2, 14);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('compiling', 'asd', 3, 14);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('testing', 'asd', 4, 14);

/*marcus, memory management*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('notations', 'asd', 1, 15);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('searches', 'asd', 2, 15);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('optimization', 'asd', 3, 15);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('memory alocation', 'asd', 4, 15);

/*bruna, soft 4*/
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('empathy', 'asd', 1, 16);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('cnv', 'asd', 2, 16);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('conversations', 'asd', 3, 16);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId")
VALUES ('problems', 'asd', 4, 16);