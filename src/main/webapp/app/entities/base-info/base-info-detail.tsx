import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './base-info.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const BaseInfoDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const baseInfoEntity = useAppSelector(state => state.baseInfo.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="baseInfoDetailsHeading">
          <Translate contentKey="catinyApp.baseInfo.detail.title">BaseInfo</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{baseInfoEntity.id}</dd>
          <dt>
            <span id="processStatus">
              <Translate contentKey="catinyApp.baseInfo.processStatus">Process Status</Translate>
            </span>
            <UncontrolledTooltip target="processStatus">
              <Translate contentKey="catinyApp.baseInfo.help.processStatus" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.processStatus}</dd>
          <dt>
            <span id="owner">
              <Translate contentKey="catinyApp.baseInfo.owner">Owner</Translate>
            </span>
            <UncontrolledTooltip target="owner">
              <Translate contentKey="catinyApp.baseInfo.help.owner" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.owner}</dd>
          <dt>
            <span id="role">
              <Translate contentKey="catinyApp.baseInfo.role">Role</Translate>
            </span>
            <UncontrolledTooltip target="role">
              <Translate contentKey="catinyApp.baseInfo.help.role" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.role}</dd>
          <dt>
            <span id="modifiedClass">
              <Translate contentKey="catinyApp.baseInfo.modifiedClass">Modified Class</Translate>
            </span>
            <UncontrolledTooltip target="modifiedClass">
              <Translate contentKey="catinyApp.baseInfo.help.modifiedClass" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.modifiedClass}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="catinyApp.baseInfo.createdDate">Created Date</Translate>
            </span>
            <UncontrolledTooltip target="createdDate">
              <Translate contentKey="catinyApp.baseInfo.help.createdDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {baseInfoEntity.createdDate ? <TextFormat value={baseInfoEntity.createdDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="modifiedDate">
              <Translate contentKey="catinyApp.baseInfo.modifiedDate">Modified Date</Translate>
            </span>
            <UncontrolledTooltip target="modifiedDate">
              <Translate contentKey="catinyApp.baseInfo.help.modifiedDate" />
            </UncontrolledTooltip>
          </dt>
          <dd>
            {baseInfoEntity.modifiedDate ? <TextFormat value={baseInfoEntity.modifiedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="catinyApp.baseInfo.createdBy">Created By</Translate>
            </span>
            <UncontrolledTooltip target="createdBy">
              <Translate contentKey="catinyApp.baseInfo.help.createdBy" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.createdBy}</dd>
          <dt>
            <span id="modifiedBy">
              <Translate contentKey="catinyApp.baseInfo.modifiedBy">Modified By</Translate>
            </span>
            <UncontrolledTooltip target="modifiedBy">
              <Translate contentKey="catinyApp.baseInfo.help.modifiedBy" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.modifiedBy}</dd>
          <dt>
            <span id="notes">
              <Translate contentKey="catinyApp.baseInfo.notes">Notes</Translate>
            </span>
            <UncontrolledTooltip target="notes">
              <Translate contentKey="catinyApp.baseInfo.help.notes" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.notes}</dd>
          <dt>
            <span id="historyUpdate">
              <Translate contentKey="catinyApp.baseInfo.historyUpdate">History Update</Translate>
            </span>
            <UncontrolledTooltip target="historyUpdate">
              <Translate contentKey="catinyApp.baseInfo.help.historyUpdate" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.historyUpdate}</dd>
          <dt>
            <span id="deleted">
              <Translate contentKey="catinyApp.baseInfo.deleted">Deleted</Translate>
            </span>
            <UncontrolledTooltip target="deleted">
              <Translate contentKey="catinyApp.baseInfo.help.deleted" />
            </UncontrolledTooltip>
          </dt>
          <dd>{baseInfoEntity.deleted ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/base-info" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/base-info/${baseInfoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BaseInfoDetail;