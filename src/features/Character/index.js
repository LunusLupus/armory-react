import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selector } from './characters.reducer';
import { fetchCharacter, selectCharacter } from './actions';
import { fetchUserCharacters, selectUser } from 'features/User/actions';
import { calculate as calculateAttributes } from 'lib/gw2/attributes';

import Specialization from './components/Specialization';
import CharactersList from 'common/components/CharactersList';
import ContentCard from 'common/components/ContentCard';
import Portrait from './components/Portrait';
import Attribute from './components/Attribute';

import Item from './components/Item';
import styles from './styles.less';

const leftItems = [
  {
    name: 'Headgear',
    type: 'head',
    key: 'helm',
  },
  {
    name: 'Shoulders',
    type: 'shoulder',
    key: 'shoulders',
  },
  {
    name: 'Chest',
    type: 'chest',
    key: 'coat',
  },
  {
    name: 'Gloves',
    type: 'hand',
    key: 'gloves',
  },
  {
    name: 'Leggings',
    type: 'leg',
    key: 'leggings',
  },
  {
    name: 'Boots',
    type: 'feet',
    key: 'boots',
  },
  {
    name: 'Main-Hand Weapon',
    type: 'sword',
    key: 'weaponA1',
  },
  {
    name: 'Off-Hand Weapon',
    type: 'shield',
    key: 'weaponA2',
  },
  {
    name: 'Main-Hand Weapon',
    type: 'sword',
    key: 'weaponB1',
  },
  {
    name: 'Off-Hand Weapon',
    type: 'shield',
    key: 'weaponB2',
  },
];

const rightItems = [
  {
    name: 'Back',
    type: 'back',
    key: 'backpack',
  },
  {
    name: 'Accessory',
    type: 'beartrinket',
    key: 'accessory1',
  },
  {
    name: 'Accessory',
    type: 'cubetrinket',
    key: 'accessory2',
  },
  {
    name: 'Amulet',
    type: 'amulet',
    key: 'amulet',
  },
  {
    name: 'Ring',
    type: 'rightring',
    key: 'ring1',
  },
  {
    name: 'Ring',
    type: 'leftring',
    key: 'ring2',
  },
  {
    name: 'Foraging',
    type: 'sickle',
    key: 'sickle',
  },
  {
    name: 'Logging',
    type: 'axe',
    key: 'axe',
  },
  {
    name: 'Mining',
    type: 'pick',
    key: 'pick',
  },
  {
    name: 'Acquatic Headgear',
    type: 'head',
    key: 'helmAquatic',
  },
  {
    name: 'Acquatic Weapon',
    type: 'sword',
    key: 'weaponAquaticA',
  },
  {
    name: 'Acquatic Weapon',
    type: 'sword',
    key: 'weaponAquaticB',
  },
];

class Character extends Component {
  static propTypes = {
    character: PropTypes.object,
    dispatch: PropTypes.func,
    routeParams: PropTypes.object,
    characters: PropTypes.array,
    items: PropTypes.object,
    skins: PropTypes.object,
    fetchingGw2Data: PropTypes.bool,
    specializations: PropTypes.object,
    traits: PropTypes.object,
    mode: PropTypes.oneOf(['pve', 'pvp', 'wvw']),
  };

  componentWillMount () {
    const { character, alias } = this.props.routeParams;

    this.props.dispatch(fetchCharacter(character));
    this.props.dispatch(fetchUserCharacters(alias));
    this.props.dispatch(selectCharacter(character));
    this.props.dispatch(selectUser(alias));
  }

  render () {
    const {
      routeParams: { alias },
      characters,
      character,
    } = this.props;

    const equipment = character && character.equipment;
    const attributes = calculateAttributes(character, this.props.items);
    const specializations = (character && character.specializations) || {
      [this.props.mode]: [{}, {}, {}],
    };

    return (
      <div className={styles.root}>
        <div className={styles.inner}>
          <ContentCard content={character} size="big" />

          <div className={styles.columns}>
            <div className={styles.leftColumn}>
              {leftItems.map((item) =>
                <Item
                  {...item}
                  key={item.key}
                  item={this.props.items[equipment &&
                    equipment[item.key] &&
                    equipment[item.key].id]}
                  skin={this.props.skins[equipment &&
                    equipment[item.key] &&
                    equipment[item.key].skin]}
                />)}
            </div>

            <Portrait character={character} />

            <div className={styles.rightColumn}>
              <div className={styles.attributes}>
                {Object.keys(attributes).map((key) => {
                  const value = attributes[key];
                  return <Attribute key={key} name={key} value={value} />;
                })}
              </div>

              <div className={styles.innerRightColumn}>
              {rightItems.map((item) =>
                <Item
                  {...item}
                  key={item.key}
                  item={this.props.items[equipment &&
                    equipment[item.key] &&
                    equipment[item.key].id]}
                  skin={this.props.skins[equipment &&
                    equipment[item.key] &&
                    equipment[item.key].skin]}
                />)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.specializationContainer}>
          <div className={styles.brushStrokeContainer}>
            {specializations[this.props.mode].map((data, index) =>
              <Specialization
                key={data.id || index}
                data={data}
                specializations={this.props.specializations}
                traits={this.props.traits}
              />)}
          </div>
        </div>

        <CharactersList alias={alias} characters={characters} />
      </div>
    );
  }
}

export default connect(selector)(Character);
