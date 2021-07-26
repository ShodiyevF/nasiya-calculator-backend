create table kurs (
    id serial,
    kurs_sana TEXT,
    kurs_kurs integer
);
insert into kurs(kurs_sana, kurs_kurs) values ('19.07.2021', 11050);
insert into kurs(kurs_sana, kurs_kurs) values ('19.07.2021', 11350);
insert into kurs(kurs_sana, kurs_kurs) values ('20.08.2025', 11200);
insert into kurs(kurs_sana, kurs_kurs) values ('20.07.2021', 10750);

const insertData = async (sana, kurs) => {
    let user = await query(INSERT INTO kurs (kurs_sana, kurs_kurs) VALUES ($1, $2))
    return user
}

module.exports = insertData