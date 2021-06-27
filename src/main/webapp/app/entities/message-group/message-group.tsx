import React, {useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Button, Col, Form, FormGroup, Input, InputGroup, Row, Table} from 'reactstrap';
import {getSortState, TextFormat, Translate, translate} from 'react-jhipster';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {getEntities, reset, searchEntities} from './message-group.reducer';
import {APP_DATE_FORMAT} from 'app/config/constants';
import {ASC, DESC, ITEMS_PER_PAGE} from 'app/shared/util/pagination.constants';
import {overridePaginationStateWithQueryParams} from 'app/shared/util/entity-utils';
import {useAppDispatch, useAppSelector} from 'app/config/store';

export const MessageGroup = (props: RouteComponentProps<{ url: string }>) =>
{
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE, 'id'), props.location.search)
  );
  const [sorting, setSorting] = useState(false);

  const messageGroupList = useAppSelector(state => state.messageGroup.entities);
  const loading = useAppSelector(state => state.messageGroup.loading);
  const totalItems = useAppSelector(state => state.messageGroup.totalItems);
  const links = useAppSelector(state => state.messageGroup.links);
  const entity = useAppSelector(state => state.messageGroup.entity);
  const updateSuccess = useAppSelector(state => state.messageGroup.updateSuccess);

  const getAllEntities = () =>
  {
    if (search)
    {
      dispatch(
        searchEntities({
          query: search,
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    } else
    {
      dispatch(
        getEntities({
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    }
  };

  const resetAll = () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  useEffect(() => {
    resetAll();
  }, []);

  const startSearching = e =>
  {
    if (search)
    {
      dispatch(reset());
      setPaginationState({
        ...paginationState,
        activePage: 1,
      });
      dispatch(
        searchEntities({
          query: search,
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    }
    e.preventDefault();
  };

  const clear = () => {
    dispatch(reset());
    setSearch('');
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  const handleSearch = event => setSearch(event.target.value);

  useEffect(() =>
  {
    if (updateSuccess)
    {
      resetAll();
    }
  }, [updateSuccess]);

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if ((window as any).pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1,
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting, search]);

  const sort = p => () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
    setSorting(true);
  };

  const handleSyncList = () =>
  {
    resetAll();
  };

  const {match} = props;

  return (
    <div>
      <h2 id="message-group-heading" data-cy="MessageGroupHeading">
        <Translate contentKey="catinyApp.messageGroup.home.title">Message Groups</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading}/>{' '}
            <Translate contentKey="catinyApp.messageGroup.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="catinyApp.messageGroup.home.createLabel">Create new Message Group</Translate>
          </Link>
        </div>
      </h2>
      <Row>
        <Col sm="12">
          <Form onSubmit={startSearching}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="search"
                  defaultValue={search}
                  onChange={handleSearch}
                  placeholder={translate('catinyApp.messageGroup.home.search')}
                />
                <Button className="input-group-addon">
                  <FontAwesomeIcon icon="search"/>
                </Button>
                <Button type="reset" className="input-group-addon" onClick={clear}>
                  <FontAwesomeIcon icon="trash"/>
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <div className="table-responsive">
        <InfiniteScroll
          pageStart={paginationState.activePage}
          loadMore={handleLoadMore}
          hasMore={paginationState.activePage - 1 < links.next}
          loader={<div className="loader">Loading ...</div>}
          threshold={0}
          initialLoad={false}
        >
          {messageGroupList && messageGroupList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    <Translate contentKey="catinyApp.messageGroup.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('uuid')}>
                    <Translate contentKey="catinyApp.messageGroup.uuid">Uuid</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('userId')}>
                    <Translate contentKey="catinyApp.messageGroup.userId">User Id</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('groupId')}>
                    <Translate contentKey="catinyApp.messageGroup.groupId">Group Id</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('groupName')}>
                    <Translate contentKey="catinyApp.messageGroup.groupName">Group Name</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('addBy')}>
                    <Translate contentKey="catinyApp.messageGroup.addBy">Add By</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('lastContent')}>
                    <Translate contentKey="catinyApp.messageGroup.lastContent">Last Content</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('searchField')}>
                    <Translate contentKey="catinyApp.messageGroup.searchField">Search Field</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('role')}>
                    <Translate contentKey="catinyApp.messageGroup.role">Role</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('createdDate')}>
                    <Translate contentKey="catinyApp.messageGroup.createdDate">Created Date</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('modifiedDate')}>
                    <Translate contentKey="catinyApp.messageGroup.modifiedDate">Modified Date</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('createdBy')}>
                    <Translate contentKey="catinyApp.messageGroup.createdBy">Created By</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('modifiedBy')}>
                    <Translate contentKey="catinyApp.messageGroup.modifiedBy">Modified By</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('comment')}>
                    <Translate contentKey="catinyApp.messageGroup.comment">Comment</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {messageGroupList.map((messageGroup, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>
                      <Button tag={Link} to={`${match.url}/${messageGroup.id}`} color="link" size="sm">
                        {messageGroup.id}
                      </Button>
                    </td>
                    <td>{messageGroup.uuid}</td>
                    <td>{messageGroup.userId}</td>
                    <td>{messageGroup.groupId}</td>
                    <td>{messageGroup.groupName}</td>
                    <td>{messageGroup.addBy}</td>
                    <td>{messageGroup.lastContent}</td>
                    <td>{messageGroup.searchField}</td>
                    <td>{messageGroup.role}</td>
                    <td>
                      {messageGroup.createdDate ? (
                        <TextFormat type="date" value={messageGroup.createdDate} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {messageGroup.modifiedDate ? (
                        <TextFormat type="date" value={messageGroup.modifiedDate} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>{messageGroup.createdBy}</td>
                    <td>{messageGroup.modifiedBy}</td>
                    <td>{messageGroup.comment}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${messageGroup.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${messageGroup.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button
                          tag={Link}
                          to={`${match.url}/${messageGroup.id}/delete`}
                          color="danger"
                          size="sm"
                          data-cy="entityDeleteButton"
                        >
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="catinyApp.messageGroup.home.notFound">No Message Groups found</Translate>
              </div>
            )
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default MessageGroup;
