var SOS_1_0_0_Module_Factory = function () {
  var SOS_1_0_0 = {
    n: 'SOS_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sos\/1.0',
    deps: ['GML_3_1_1', 'SWE_1_0_1', 'OWS_1_1_0', 'SOS_1_0_0_Filter', 'OM_1_0_0'],
    tis: [{
        ln: 'GetObservation.FeatureOfInterest',
        tn: null,
        ps: [{
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'spatialOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.SpatialOpsType',
            t: 'er'
          }, {
            n: 'objectID',
            rq: true,
            col: true,
            en: 'ObjectID'
          }]
      }, {
        ln: 'GetResult.EventTime',
        tn: null,
        ps: [{
            n: 'temporalOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'temporalOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.TemporalOpsType',
            t: 'er'
          }]
      }, {
        ln: 'GetFeatureOfInterestTime',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'featureOfInterestId',
            rq: true,
            en: 'FeatureOfInterestId'
          }]
      }, {
        ln: 'Contents.ObservationOfferingList',
        tn: null,
        ps: [{
            n: 'observationOffering',
            rq: true,
            col: true,
            en: 'ObservationOffering',
            ti: '.ObservationOfferingType'
          }]
      }, {
        ln: 'DescribeResultModel',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'resultName',
            rq: true,
            en: 'ResultName',
            ti: 'QName'
          }]
      }, {
        ln: 'DescribeObservationType',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'observedProperty',
            rq: true
          }]
      }, {
        ln: 'RegisterSensorResponse',
        tn: null,
        ps: [{
            n: 'assignedSensorId',
            rq: true,
            en: 'AssignedSensorId'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetObservation',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'offering',
            rq: true
          }, {
            n: 'eventTime',
            mno: 0,
            col: true,
            ti: '.GetObservation.EventTime'
          }, {
            n: 'procedure',
            mno: 0,
            col: true
          }, {
            n: 'observedProperty',
            rq: true,
            col: true
          }, {
            n: 'featureOfInterest',
            ti: '.GetObservation.FeatureOfInterest'
          }, {
            n: 'result',
            ti: '.GetObservation.Result'
          }, {
            n: 'responseFormat',
            rq: true
          }, {
            n: 'resultModel',
            ti: 'QName'
          }, {
            n: 'responseMode'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetObservation.EventTime',
        tn: null,
        ps: [{
            n: 'temporalOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'temporalOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.TemporalOpsType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeFeatureType',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'featureId',
            rq: true,
            en: 'FeatureId'
          }]
      }, {
        ln: 'InsertObservationResponse',
        tn: null,
        ps: [{
            n: 'assignedObservationId',
            rq: true,
            en: 'AssignedObservationId'
          }]
      }, {
        ln: 'ObservationTemplate',
        tn: null,
        ps: [{
            n: 'observation',
            rq: true,
            en: {
              lp: 'Observation',
              ns: 'http:\/\/www.opengis.net\/om\/1.0'
            },
            ti: 'OM_1_0_0.ObservationType'
          }]
      }, {
        ln: 'RegisterSensor',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'sensorDescription',
            rq: true,
            en: 'SensorDescription',
            ti: '.RegisterSensor.SensorDescription'
          }, {
            n: 'observationTemplate',
            rq: true,
            en: 'ObservationTemplate',
            ti: '.ObservationTemplate'
          }]
      }, {
        ln: 'Contents',
        tn: null,
        ps: [{
            n: 'observationOfferingList',
            rq: true,
            en: 'ObservationOfferingList',
            ti: '.Contents.ObservationOfferingList'
          }]
      }, {
        ln: 'GetObservationById',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'observationId',
            rq: true,
            en: 'ObservationId'
          }, {
            n: 'responseFormat'
          }, {
            n: 'resultModel',
            ti: 'QName'
          }, {
            n: 'responseMode'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetFeatureOfInterest.Location',
        tn: null,
        ps: [{
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'spatialOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.SpatialOpsType',
            t: 'er'
          }]
      }, {
        ln: 'FilterCapabilities',
        tn: null,
        ps: [{
            n: 'spatialCapabilities',
            rq: true,
            en: {
              lp: 'Spatial_Capabilities',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.SpatialCapabilitiesType'
          }, {
            n: 'temporalCapabilities',
            rq: true,
            en: {
              lp: 'Temporal_Capabilities',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.TemporalCapabilitiesType'
          }, {
            n: 'scalarCapabilities',
            rq: true,
            en: {
              lp: 'Scalar_Capabilities',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.ScalarCapabilitiesType'
          }, {
            n: 'idCapabilities',
            rq: true,
            en: {
              lp: 'Id_Capabilities',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.IdCapabilitiesType'
          }]
      }, {
        ln: 'DescribeSensor',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'procedure',
            rq: true
          }, {
            n: 'outputFormat',
            rq: true,
            an: {
              lp: 'outputFormat'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetResultResponse.Result',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'rs',
            rq: true,
            an: {
              lp: 'RS'
            },
            t: 'a'
          }]
      }, {
        ln: 'InsertObservation',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'assignedSensorId',
            rq: true,
            en: 'AssignedSensorId'
          }, {
            n: 'observation',
            rq: true,
            en: {
              lp: 'Observation',
              ns: 'http:\/\/www.opengis.net\/om\/1.0'
            },
            ti: 'OM_1_0_0.ObservationType'
          }]
      }, {
        ln: 'RegisterSensor.SensorDescription',
        tn: null,
        ps: [{
            n: 'any',
            rq: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'GetResultResponse',
        tn: null,
        ps: [{
            n: 'result',
            rq: true,
            ti: '.GetResultResponse.Result'
          }]
      }, {
        ln: 'GetObservation.Result',
        tn: null,
        ps: [{
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'comparisonOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.ComparisonOpsType',
            t: 'er'
          }]
      }, {
        ln: 'Capabilities',
        tn: null,
        bti: 'OWS_1_1_0.CapabilitiesBaseType',
        ps: [{
            n: 'filterCapabilities',
            en: 'Filter_Capabilities',
            ti: '.FilterCapabilities'
          }, {
            n: 'contents',
            en: 'Contents',
            ti: '.Contents'
          }]
      }, {
        ln: 'GetResult',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'observationTemplateId',
            rq: true,
            en: 'ObservationTemplateId'
          }, {
            n: 'eventTime',
            mno: 0,
            col: true,
            ti: '.GetResult.EventTime'
          }]
      }, {
        ln: 'GetFeatureOfInterest',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'featureOfInterestId',
            rq: true,
            col: true,
            en: 'FeatureOfInterestId'
          }, {
            n: 'location',
            rq: true,
            ti: '.GetFeatureOfInterest.Location'
          }, {
            n: 'eventTime',
            mno: 0,
            col: true,
            ti: '.GetFeatureOfInterest.EventTime'
          }]
      }, {
        ln: 'GetFeatureOfInterest.EventTime',
        tn: null,
        ps: [{
            n: 'temporalOps',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'temporalOps',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'SOS_1_0_0_Filter.TemporalOpsType',
            t: 'er'
          }]
      }, {
        ln: 'ObservationOfferingType',
        bti: '.ObservationOfferingBaseType',
        ps: [{
            n: 'intendedApplication',
            mno: 0,
            col: true,
            ti: 'Token'
          }, {
            n: 'time',
            rq: true,
            ti: 'SWE_1_0_1.TimeGeometricPrimitivePropertyType'
          }, {
            n: 'procedure',
            rq: true,
            col: true,
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'observedProperty',
            rq: true,
            col: true,
            ti: 'SWE_1_0_1.PhenomenonPropertyType'
          }, {
            n: 'featureOfInterest',
            rq: true,
            col: true,
            ti: 'GML_3_1_1.ReferenceType'
          }, {
            n: 'responseFormat',
            rq: true,
            col: true
          }, {
            n: 'resultModel',
            mno: 0,
            col: true,
            ti: 'QName'
          }, {
            n: 'responseMode',
            mno: 0,
            col: true
          }]
      }, {
        ln: 'ObservationOfferingBaseType',
        bti: 'GML_3_1_1.AbstractFeatureType'
      }, {
        ln: 'GetCapabilities',
        tn: null,
        bti: 'OWS_1_1_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'ResponseModeType',
        vs: ['inline', 'attached', 'out-of-band', 'resultTemplate']
      }],
    eis: [{
        en: 'supportedSensorDescription',
        ti: 'QName',
        sh: {
          lp: 'AbstractMetaData',
          ns: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        en: 'DescribeObservationType',
        ti: '.DescribeObservationType'
      }, {
        en: 'GetResult',
        ti: '.GetResult'
      }, {
        en: 'GetResultResponse',
        ti: '.GetResultResponse'
      }, {
        en: 'Contents',
        ti: '.Contents'
      }, {
        en: 'GetObservation',
        ti: '.GetObservation'
      }, {
        en: 'InsertObservationResponse',
        ti: '.InsertObservationResponse'
      }, {
        en: 'GetObservationById',
        ti: '.GetObservationById'
      }, {
        en: 'InsertObservation',
        ti: '.InsertObservation'
      }, {
        en: 'GetFeatureOfInterest',
        ti: '.GetFeatureOfInterest'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilities'
      }, {
        en: 'DescribeResultModel',
        ti: '.DescribeResultModel'
      }, {
        en: 'Capabilities',
        ti: '.Capabilities'
      }, {
        en: 'RegisterSensorResponse',
        ti: '.RegisterSensorResponse'
      }, {
        en: 'GetFeatureOfInterestTime',
        ti: '.GetFeatureOfInterestTime'
      }, {
        en: 'Filter_Capabilities',
        ti: '.FilterCapabilities'
      }, {
        en: 'srsName',
        ti: 'GML_3_1_1.CodeType',
        sh: {
          lp: 'AbstractMetaData',
          ns: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        en: 'supportedSRS',
        ti: 'GML_3_1_1.CodeType',
        sh: {
          lp: 'name',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'RegisterSensor',
        ti: '.RegisterSensor'
      }, {
        en: 'ObservationTemplate',
        ti: '.ObservationTemplate'
      }, {
        en: 'DescribeSensor',
        ti: '.DescribeSensor'
      }, {
        en: 'DescribeFeatureType',
        ti: '.DescribeFeatureType'
      }]
  };
  return {
    SOS_1_0_0: SOS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SOS_1_0_0_Module_Factory);
}
else {
  var SOS_1_0_0_Module = SOS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SOS_1_0_0 = SOS_1_0_0_Module.SOS_1_0_0;
  }
  else {
    var SOS_1_0_0 = SOS_1_0_0_Module.SOS_1_0_0;
  }
}