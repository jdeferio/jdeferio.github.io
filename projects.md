---
layout: page
title: Projects
---

### Projects

- <b>healthSystem</b> [<span style="color:#E6B105"><em>hold</em></span>]: 
    <br>
    The purpose of this project is to design and build a lightweight and easily modifiable health data system. This design will be modular to promote customization, and avoid large monolithic repositories. Intended features are to include a database schema, ETL tools, DICOM imaging database, and automation services. 
        
    In-progress Features:
    <br>
    - <a href="https://github.com/jdeferio/healthdbModels" target="_blank">healthdbModels</a>: Framework to construct a simple, customizable health database (HealthDB).
    - <a href="https://github.com/jdeferio/healthdbETL" target="_blank">healthdbETL</a>: ETL and Database Interaction Tools for HealthDB

    Testing:
    - healthdbModels and healthdbETL are being tested with synthetically generated patient data using the <a href="https://synthetichealth.github.io/synthea/#about-landing" target="_blank">Synthea</a> package. 

    <i>Planned Features</i>:
    - Lightweight <a href="https://www.orthanc-server.com" target="_blank">Orthanc Dicom Server</a> for advanced image storage and sharing. This service will run in a <a href="https://www.docker.com" target="_blank">Docker</a> container and tie into the HealthDB model. 
    - Incorporation of <a href="https://www.hl7.org/about/index.cfm?ref=common" target="_blank">HL7</a> and <a href="https://www.hl7.org/fhir/" target="_blank">FHIR</a> standards for interoperability and data exchange. (<a href="https://pypi.org/project/hl7apy/" target="_blank">HL7apy</a>, <a href="https://github.com/smart-on-fhir/client-py" target="_blank">FHIRclient</a>) 
    - Task automation using <a href="https://airflow.apache.org" target="_blank">Apache Airflow</a>

    The project stack includes: <a href="https://www.python.org" target="_blank">Python</a>, <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a>


- <b>PsychPredict</b> [<span style="color:#E6B105"><em>hold</em></span>]:
    <br>
    This project was designed to <a href="https://github.com/jdeferio/psych_predict" target="_blank">predict incident psychiatric hospitalizations</a> using data sourced from an electronic medical record at <a href="https://phs.weill.cornell.edu/" target="_blank">Weill Cornell Medicine</a>. The project incorporates SQL queries, transformations, and common machine-learning algorithms.
    
    The project stack includes: <a href="https://www.python.org" target="_blank">Python</a>, <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a> 