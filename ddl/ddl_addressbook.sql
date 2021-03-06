CONNECT addressbook;
create table if not exists address_entry
(
    id              serial       primary key,
    yataiName       varchar(100) not null,
    yataiNameKana   varchar(100),
    production      char(5),
    carpenter       char(20),
    sculptor        varchar(255),
    shrine          char(20),
    deleted         boolean default false
);


CREATE VIEW v_address_entry AS
    SELECT id,yataiName,yataiNameKana,production,carpenter,
                sculptor, shrine
    FROM address_entry 
    WHERE deleted = false
;


