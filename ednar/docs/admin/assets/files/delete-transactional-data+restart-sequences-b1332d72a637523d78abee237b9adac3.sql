-- The following statements will delete all transactional data from an EDNAR SQL Server DB instance while leaving config and user data intact. 
-- THEY SHOULD NOT BE USED ON A PRODUCTION INSTANCE. BACKUP ALL DATABASES BEFORE RUNNING.

-- Authorities
TRUNCATE TABLE access_auth_operators;
TRUNCATE TABLE access_auth_p_devices;
TRUNCATE TABLE access_authority_annotations;
TRUNCATE TABLE access_authority_apparatus;
TRUNCATE TABLE access_authority_isol_points;
DELETE FROM access_authorities;


--Attachments
TRUNCATE TABLE unsaved_attachments;
TRUNCATE TABLE nar_attachments;
TRUNCATE TABLE attachments;

-- DMS Switching
TRUNCATE TABLE dms_switching_details;

-- Generators
TRUNCATE TABLE generator_isolation_points;
DELETE FROM generators;

-- Interested Parties
TRUNCATE TABLE interested_parties;

-- LV Switching Steps
TRUNCATE TABLE lv_switching_steps;

-- Customer notification tasks
TRUNCATE TABLE nmis_events;
DELETE FROM customer_notification_nmis;
DELETE FROM customer_notification_events;
DELETE FROM customer_notification_tasks;

-- NAR details
TRUNCATE TABLE nar_additional_eq_containers;
TRUNCATE TABLE nar_annotations;
TRUNCATE TABLE nar_asset_eq_containers;
TRUNCATE TABLE nar_asset_location;
TRUNCATE TABLE asset_points_of_interest;
DELETE FROM nar_assets;
TRUNCATE TABLE nar_audit_log;
TRUNCATE TABLE nar_comments;
TRUNCATE TABLE nar_job_types;
TRUNCATE TABLE nar_locks;
TRUNCATE TABLE nar_question_answers;
TRUNCATE TABLE nar_trans_history_reasons;
DELETE FROM nar_trans_history;
TRUNCATE TABLE nars_planners;
TRUNCATE TABLE participants;
DELETE FROM interruptions;
DELETE FROM pon_projects;
DELETE FROM nars;



--- Restart the sequences for the empty tables:

-- Authorities
ALTER SEQUENCE seq_access_auth_operators_id RESTART;
ALTER SEQUENCE seq_access_authority_annots RESTART;
ALTER SEQUENCE seq_access_authorities RESTART;

--Attachments
ALTER SEQUENCE seq_nar_attachments RESTART;
ALTER SEQUENCE seq_attachments RESTART;

-- DMS Switching
ALTER SEQUENCE seq_dms_switching_details RESTART;

-- Generators
ALTER SEQUENCE seq_generators RESTART;

-- Interested Parties
ALTER SEQUENCE seq_interested_parties RESTART;

-- LV Switching Steps

-- Customer notification tasks
ALTER SEQUENCE seq_cn_nmi RESTART;
ALTER SEQUENCE seq_cn_event RESTART;
ALTER SEQUENCE seq_cn_task RESTART;

-- NAR details
ALTER SEQUENCE seq_nar_add_eq_containers RESTART;
ALTER SEQUENCE seq_nar_annotations RESTART;
ALTER SEQUENCE seq_nar_asset_eq_containers RESTART;
ALTER SEQUENCE seq_nar_asset_location RESTART;
ALTER SEQUENCE seq_nar_assets RESTART;
ALTER SEQUENCE seq_nar_audit_log RESTART;
ALTER SEQUENCE seq_nar_comments RESTART;
ALTER SEQUENCE seq_nar_lock RESTART;
ALTER SEQUENCE seq_nar_trans_id RESTART;
ALTER SEQUENCE seq_nars_planners_id RESTART;
ALTER SEQUENCE seq_nars RESTART;
