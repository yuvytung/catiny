import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { loadMoreDataWhenScrolled, parseHeaderForLinks } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { IQueryParams, createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { IHanhChinhVN, defaultValue } from 'app/shared/model/hanh-chinh-vn.model';

const initialState: EntityState<IHanhChinhVN> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/hanh-chinh-vns';
const apiSearchUrl = 'api/_search/hanh-chinh-vns';

// Actions

export const searchEntities = createAsyncThunk('hanhChinhVN/search_entity', async ({ query, page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiSearchUrl}?query=${query}${sort ? `&page=${page}&size=${size}&sort=${sort}` : ''}`;
  return axios.get<IHanhChinhVN[]>(requestUrl);
});

export const getEntities = createAsyncThunk('hanhChinhVN/fetch_entity_list', async ({ page, size, sort }: IQueryParams) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}&` : '?'}cacheBuster=${new Date().getTime()}`;
  return axios.get<IHanhChinhVN[]>(requestUrl);
});

export const getEntity = createAsyncThunk(
  'hanhChinhVN/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return axios.get<IHanhChinhVN>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

export const createEntity = createAsyncThunk(
  'hanhChinhVN/create_entity',
  async (entity: IHanhChinhVN, thunkAPI) => {
    return axios.post<IHanhChinhVN>(apiUrl, cleanEntity(entity));
  },
  { serializeError: serializeAxiosError }
);

export const updateEntity = createAsyncThunk(
  'hanhChinhVN/update_entity',
  async (entity: IHanhChinhVN, thunkAPI) => {
    return axios.put<IHanhChinhVN>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
  },
  { serializeError: serializeAxiosError }
);

export const partialUpdateEntity = createAsyncThunk(
  'hanhChinhVN/partial_update_entity',
  async (entity: IHanhChinhVN, thunkAPI) => {
    return axios.patch<IHanhChinhVN>(`${apiUrl}/${entity.id}`, cleanEntity(entity));
  },
  { serializeError: serializeAxiosError }
);

export const deleteEntity = createAsyncThunk(
  'hanhChinhVN/delete_entity',
  async (id: string | number, thunkAPI) => {
    const requestUrl = `${apiUrl}/${id}`;
    return await axios.delete<IHanhChinhVN>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

// slice

export const HanhChinhVNSlice = createEntitySlice({
  name: 'hanhChinhVN',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
      })
      .addCase(deleteEntity.fulfilled, state => {
        state.updating = false;
        state.updateSuccess = true;
        state.entity = {};
      })
      .addMatcher(isFulfilled(getEntities, searchEntities), (state, action) => {
        const links = parseHeaderForLinks(action.payload.headers.link);

        return {
          ...state,
          loading: false,
          links,
          entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
          totalItems: parseInt(action.payload.headers['x-total-count'], 10),
        };
      })
      .addMatcher(isFulfilled(createEntity, updateEntity, partialUpdateEntity), (state, action) => {
        state.updating = false;
        state.loading = false;
        state.updateSuccess = true;
        state.entity = action.payload.data;
      })
      .addMatcher(isPending(getEntities, getEntity, searchEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isPending(createEntity, updateEntity, partialUpdateEntity, deleteEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.updating = true;
      });
  },
});

export const { reset } = HanhChinhVNSlice.actions;

// Reducer
export default HanhChinhVNSlice.reducer;
